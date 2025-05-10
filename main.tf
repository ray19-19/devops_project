terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "myapp" {
  name = "myapp"
  build {
    context = "${path.module}"
  }
}

resource "docker_container" "myapp" {
  name  = "myapp"
  image = docker_image.myapp.latest

  ports {
    internal = 5000
    external = 5000
  }
}
