package handlers

import (
	"context"
	"lambdas/api/presenter"
	"lambdas/api/response"
	"lambdas/pkg"
	"log"

	"github.com/gofiber/fiber/v2"
)

func Hello() fiber.Handler {
	return func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	}
}

func Generate() fiber.Handler {
	return func(c *fiber.Ctx) error {
		ctx := context.Background()
		_, _, err := pkg.Gemini(ctx)
		if err != nil {
			log.Fatal(err)
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": "Something went really wrong",
				"status":  "Error",
				"data":    []string{},
			})
		}
		body := new(presenter.GenerateRequest)
		if err := c.BodyParser(&body); err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "cannot parse JSON",
				"status":  "Error",
				"data":    []string{},
			})
		}
		if body.Text == "" {
			return response.Error("Expected text", []string{}).Send(c, fiber.StatusBadRequest)
		}
		return response.Success("Success", []string{
			body.Text,
		}).Send(c, fiber.StatusOK)
	}
}
