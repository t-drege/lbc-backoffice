import axios from 'axios'

export default axios.create({
  baseURL: process.env.BASE_URL,
  post: {
    'Content-Type': 'application/json'
  },
  headers : {
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0aG9tYXNkcmVnZTFAZ21haWwuY29tIiwicm9sZSI6MSwiaWF0IjoxNjQxOTExMDc2LCJleHAiOjE2NDI1MTU4NzZ9.JvGpf5qqhZQUPDnKPmr38STcbkN4gHgRkxfYxMoYAZFnYAUIp7U8nacGxuQp2DpZ2_6y46TwKAmRwm-4LnVD9Tr67IU26XqzKXZxu0pYscNvYMRSYWn3e6uwN06_za4_cLAswzfXRnI6QFUpBbqYSzpB4Gha4XcrjF8ALaDMJE1MJPMG33JCm_4Jx0kbsJaRdzUG8fQhXdwajgb-m2howCCCSY6lHSv2x6WxpXdeV1hQ4RysAvDozHVjbRBr6kdPCy20k2q_YbsesuSRazEbruU8MBl0BvV3wEVgSvVbfdlhT4EvQQVcqWfi9BNvEQTZBOtGaxrPkSmRNG9pPUBEaA'
  }
})
