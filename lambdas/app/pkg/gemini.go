package pkg

import (
	"context"
	"log"
	"os"

	"github.com/google/generative-ai-go/genai"
	"google.golang.org/api/option"
)

func Gemini(c context.Context) (*genai.GenerativeModel, *genai.Client) {
	ctx := c
	// Access your API key as an environment variable (see "Set up your API key" above)
	client, err := genai.NewClient(ctx, option.WithAPIKey(os.Getenv("API_KEY")))
	if err != nil {
		log.Fatal(err)
		panic("Something went wrong")
	}
	
		model := client.GenerativeModel("gemini-1.5-flash")
	return model, client
}
