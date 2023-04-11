import { Router } from "express"

export const router = Router()

router.get("/", function (req, res) {
  res.send("Hello World")
})

router.get("/whoami", function (req, res) {
  const who = {
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  }
  res.json(who)
})

export default router
