# Define variables
STACK_NAME = ju-lambda-go-fiber
TEMPLATE_FILE = template.yaml

fmt:
	gofmt -s -w .	
# Build the SAM application
build:
	sam build --template-file $(TEMPLATE_FILE)

# Deploy the SAM application
deploy:
	sam deploy --stack-name $(STACK_NAME) --guided

# Delete the SAM application
clean:
	sam delete --stack-name $(STACK_NAME)

# Run locally
local-start:
	sam local start-api


.PHONY: build deploy clean local-start lint lint-only
