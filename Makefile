
NAME     := react-grid-layout-demo
HOST     := $(shell grep HOST .env | sed 's/.*=//')
PORT     := $(shell grep poRT .env | sed 's/.*=//')


# -----------------------------------------------------------------------------

chk-env:
	@echo "NAME |${NAME}|"
	@echo "HOST |${HOST}|"
	@echo "PORT |${PORT}|"

clean:
	-rm *.log


# -----------------------------------------------------------------------------

dev:
	npm run dev

# -----------------------------------------------------------------------------




