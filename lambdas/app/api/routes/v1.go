package routes

import "github.com/gofiber/fiber/v2"

func V1Router(app fiber.Router) {
	app.Get("generate")
}
