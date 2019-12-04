/* eslint-env mocha */

const supertest = require('supertest');
var assert = require('assert');

describe('KYC Service', () => {
  it('GET thông tin verify: Trả về status 200 và message = success', (done) => {
    const url = 'http://localhost:20173'
    const api = supertest(url)
    console.log(`Calling the server ${url}`)

    api.get('/verify')
      .expect(200)
      .expect(response => {
        // console.log(response.body)
        assert(response.body.message == 'success', 'message = success')
        // done()
      }).end(done)
  })


  it('Cập nhật trạng thái SSN hợp lệ: trả về status 200', (done) => {
    const url = 'http://localhost:20173'
    const api = supertest(url)
    console.log(`Calling the server ${url}`)

    const payload = {
      uid: 35,
      status: 1
    }

    api.put('/verify')
      .send(payload)
      .expect(200, done)
  })

  it('Cập nhật trạng thái xác minh SSN verify không hợp lệ: \n- Dữ liệu truyền lên trống hoặc = 0\n- Response: trả về status = 403 & message = params missing', (done) => {
    const url = 'http://localhost:20173'
    const api = supertest(url)
    console.log(`Calling the server ${url}`)

    const payload = {
      uid: 0, // null
      status: 1
    }

    api.put('/verify')
      .send(payload)
      .expect(403)
      .expect(res => {
        
        assert.equal(res.body.message.toLowerCase(), 'params missing')
        // other way
        // assert(res.body.message.toLowerCase() == 'params missing', 'Message = params missing')
      })
      .end(done)
  })

  it('Cập nhật trạng thái xác minh SSN verify không hợp lệ: \n- Thông tin ID hoặc status không hợp lệ \n- trả về status = 403', (done) => {
    const url = 'http://localhost:20173'
    const api = supertest(url)
    console.log(`Calling the server ${url}`)

    const payload = {
      uid: -1, // null
      status: 1
    }

    api.put('/verify')
      .send(payload)
      .expect(403, done)
  })
})