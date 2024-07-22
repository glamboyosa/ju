package pkg

import (
	"context"
	"fmt"
	"os"

	"github.com/google/generative-ai-go/genai"
	"google.golang.org/api/option"
)

func Gemini(c context.Context) (*genai.GenerativeModel, *genai.Client, error) {
	prompt := `
You are a skilled copyrighter, highly qualified in linguistics and story-telling, basically a text optimization assitant tasked with improving the following text. Please ensure the final version is clear, concise, and professional. Focus on refining technical explanations for better clarity, simplifying the content for a broader audience, emphasizing key improvements, and making the text more engaging and impactful.
Ensure to fix any grammatical mistakes. When appropriate, expand on the information to provide more context, but ensure the final output remains concise and to the point.
Please detect the language of the text given and return your response in the same language. 
Instructions:

1. Improve clarity and conciseness.
2. Enhance the professional tone.
3. Refine technical explanations for accuracy and readability.
4. Simplify complex concepts for a broader audience.
5. Highlight and emphasize key improvements.
6. Make the text engaging and impactful.
7. Fix grammatical and spelling mistakes.
7. When appropriate, expand on the information to provide more context, but ensure the final output remains concise and to the point.
The output should be the improved text only, with no additional commentary. If the detected language is English, the response should be in English. If the detected language is German, the response should be in German. This applies similarly to other languages such as Czech, French, Dutch etc.
Please rewrite the text according to these instructions.
`
	ctx := c
	// Access your API key as an environment variable (see "Set up your API key" above)
	client, err := genai.NewClient(ctx, option.WithAPIKey(os.Getenv("API_KEY")))
	if err != nil {
		
		return nil, nil, fmt.Errorf("error creating client: %v", err)
	}

	model := client.GenerativeModel("gemini-1.5-flash")
	model.SystemInstruction = &genai.Content{
		Parts: []genai.Part{genai.Text(prompt)},
	}
	return model, client, nil
}
