build:
	docker build -t pipefy-node .

run:
	docker run -p 3333:3333 pipefy-node
