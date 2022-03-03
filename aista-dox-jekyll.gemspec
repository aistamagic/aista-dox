# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "aista-dox"
  spec.version       = "0.1.0"
  spec.authors       = ["Thomas Hansen"]
  spec.email         = ["info@aista.com"]

  spec.summary       = "A new Jekyll theme for documenting GitHub projects."
  spec.homepage      = "https://github.com/polterguy/aista-dox"
  spec.license       = "CC-BY-SA-4.0"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
