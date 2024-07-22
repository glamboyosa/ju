package response

import (
	"github.com/gofiber/fiber/v2"
)

const (
	StatusSuccess = "success"
	StatusError   = "error"
)

type Response struct {
	Status  string      `json:"status"` // "success" or "error"
	Message string      `json:"message"`
	Data    interface{} `json:"data"` // Can be any type: struct, map, slice, etc.
}

func Success(message string, data interface{}) *Response {
	return &Response{
		Status:  StatusSuccess,
		Message: message,
		Data:    data,
	}
}

func Error(message string, data interface{}) *Response {
	return &Response{
		Status:  StatusError,
		Message: message,
		Data:    data,
	}
}

func (r *Response) Send(c *fiber.Ctx, statusCode int) error {
	return c.Status(statusCode).JSON(r)
}
