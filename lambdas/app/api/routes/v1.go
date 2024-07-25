package routes

import (
	"lambdas/api/handlers"

	"github.com/gofiber/fiber/v2"
)

func V1Router(app fiber.Router) {
	app.Get("generate", handlers.Generate())
}
