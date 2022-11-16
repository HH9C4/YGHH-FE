import { createAsyncThunk } from "@reduxjs/toolkit"
import { membersApis } from "../../api/instance"
import axios from "axios"
// import { delCookie } from "../../cookie/cookie"

export const __kakaoLogin = createAsyncThunk(
  "members/__kakaoLogin",
  async (payload, thunkAPI) => {
    try {
      const res = await membersApis.kakaologinAX(payload)
      const Access_Token = res.headers.authorization
      localStorage.setItem("Authorization", Access_Token)
      localStorage.setItem("nickName", res.data.data.accountName)
      localStorage.setItem("profileImage", res.data.data.profileImage)
      localStorage.setItem("ageRange", res.data.data.ageRange)
      localStorage.setItem("email", res.data.data.email)
      localStorage.setItem("gender", res.data.data.gender)
      localStorage.setItem("site", "kakao")
      // // 토큰 받았고 로그인됐으니 메인으로 화면 전환시켜줌
      alert(`${localStorage.getItem("nickName")}님 환영합니다!`)
      window.location.replace("/")
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//로그아웃 Thunk
export const __kakaoLogout = createAsyncThunk(
  "members/__kakaoLogout",
  async (payload, thunkAPI) => {
    try {
      const res = await membersApis.kakaologoutAX(payload)
      if (res.data.status === "200 OK") {
        console.log("로그아웃 res 값", res)
        localStorage.removeItem("Authorization")
        localStorage.removeItem("nickName")
        localStorage.removeItem("profileImage")
        localStorage.removeItem("ageRange")
        localStorage.removeItem("email")
        localStorage.removeItem("gender")
        localStorage.removeItem("site", "kakao")
        window.location.replace("/")
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
//네이버 로그인
export const __naverLogin = createAsyncThunk(
  "members/__naverLogin",
  async (payload, thunkAPI) => {
    try {
      const res = await membersApis.naverloginAX(payload)
      console.log("넘어온 값", res) // 토큰이 넘어올 것임
      const Access_Token = res.headers.authorization
      localStorage.setItem("Authorization", Access_Token)
      localStorage.setItem("nickName", res.data.data.accountName)
      localStorage.setItem("profileImage", res.data.data.profileImage)
      localStorage.setItem("ageRange", res.data.data.ageRange)
      localStorage.setItem("email", res.data.data.email)
      localStorage.setItem("gender", res.data.data.gender)
      localStorage.setItem("site", "naver")
      alert(`${localStorage.getItem("nickName")}님 환영합니다!`)
      // // 토큰 받았고 로그인됐으니 메인으로 화면 전환시켜줌
      window.location.replace("/")
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
//네이버 로그아웃 Thunk
export const __naverLogout = createAsyncThunk(
  "members/__naverLogout",
  async (payload, thunkAPI) => {
    try {
      const res = await membersApis.naverlogoutAX(payload)
      if (res.data.status === "200 OK") {
        console.log("로그아웃 res 값", res)
        localStorage.removeItem("Authorization")
        localStorage.removeItem("nickName")
        localStorage.removeItem("profileImage")
        localStorage.removeItem("ageRange")
        localStorage.removeItem("email")
        localStorage.removeItem("gender")
        localStorage.removeItem("site")
        window.location.replace("/")
        alert(`${localStorage.getItem("nickName")}님 환영합니다!`)
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
