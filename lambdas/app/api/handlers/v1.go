package handlers

import (
	"lambdas/api/presenter"

	"github.com/gofiber/fiber/v2"
)

func Hello() fiber.Handler {
	return func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	}
}

func Generate() fiber.Handler {
	return func(c *fiber.Ctx) error {
		body := new(presenter.GenerateRequest)
		if err := c.BodyParser(&body); err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "cannot parse JSON",
				"status":  "Error",
				"data":    []string{},
			})
		}
		if body.Text == "" {
			c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"status":  "Error",
				"message": "Expected text",
				"data":    []string{},
			})
		}
		return c.JSON(fiber.Map{
			"status":  "Success",
			"message": "Expected text",
			"data": []string{
				body.Text,
			},
		})
	}
}
