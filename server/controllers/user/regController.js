import User from "../../models/userModel.js"
import asyncHandler from "express-async-handler"
import { generateToken } from "../../helpers/generateToken.js"

/* 
  @desc Register USer
  @route POST /api/users
  @access Public
*/

export const regUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body

  const isHasUser = await User.findOne({email})

  if(isHasUser){
    res.status(400)
    throw new Error('Пользователь уже зарегестрирован!')
  }

  const user = await User.create({
    email, password
  })

  const token = generateToken(user._id)

  res.json({user, token})
})