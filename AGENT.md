# Go-Go-Agent Development Guidelines

## Commands
- Build: `make build` or `go build ./...`
- Test: `make test` or `go test ./...`
- Single test: `go test ./path/to/package -run TestName`
- Lint: `make lint` or `golangci-lint run -v`
- Generate Proto: `make generate-proto`
- Install: `make install`

## Code Style Guidelines
- Use gofmt for code formatting
- Organize imports alphabetically with standard library first
- Follow Go naming conventions (CamelCase for exported, camelCase for private)
- Use explicit error handling with meaningful error messages
- Prefer return errors over panics
- Use strong typing with clear interfaces
- Minimize global state
- Use meaningful doc comments for exported functions/types
- For React UI: use TypeScript, follow ESLint rules, use functional components

## Go Guidelines

- When implementing go interfaces, use the var _ Interface = &Foo{} to make sure the interface is always implemented correctly.
- When building web applications, use htmx, bootstrap and the templ templating language.
- Always use a context argument when appropriate.
- Use cobra for command-line applications.
- Use the "defaults" package name, instead of "default" package name, as it's reserved in go.
- Use github.com/pkg/errors for wrapping errors.
- When starting goroutines, use errgroup.