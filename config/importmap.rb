# frozen_string_literal: true

# Pin npm packages by running ./bin/importmap

pin 'application'
pin '@hotwired/turbo-rails', to: 'turbo.min.js'
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"

pin "tailwindcss/plugin", to: "tailwindcss--plugin.js" # @3.4.3
pin "@tailwindcss/forms", to: "@tailwindcss--forms.js" # @0.5.7
pin "tailwindcss/colors", to: "tailwindcss--colors.js" # @3.4.3
pin "tailwindcss/defaultTheme", to: "tailwindcss--defaultTheme.js" # @3.4.3
pin "@tailwindcss/aspect-ratio", to: "@tailwindcss--aspect-ratio.js" # @0.4.2
pin "@tailwindcss/container-queries", to: "@tailwindcss--container-queries.js" # @0.1.1
pin "@tailwindcss/typography", to: "@tailwindcss--typography.js" # @0.5.12

pin "cssesc" # @3.0.0
pin "picocolors" # @1.0.0
pin "lodash.castarray" # @4.4.0
pin "lodash.isplainobject" # @4.0.6
pin "mini-svg-data-uri" # @1.4.4

pin_all_from 'app/javascript/controllers', under: 'controllers'
