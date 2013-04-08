# DOESN’T WORK...
# Title: Include File Tag for Jekyll
# Author: Alexander Jahraus http://github.com/fanaugen
# Description: Import files on your filesystem into any blog post as raw text
# Configuration: You can set default import path in _config.yml (defaults to code_dir: downloads/code)
#
# Syntax {% include_file path/to/file %}
#
# Example:
# {% include_file javascripts/test.js %}
#
# This will import the contents of test.js from #{code_dir}/javascripts/test.js

require 'pathname'
require './plugins/raw'

module Jekyll

  class IncludeFile < Liquid::Tag
    include TemplateWrapper
    def initialize(tag_name, file_name, tokens)
      super
      @file = file_name.strip
    end

    def render(context)
      code_dir  = (context.registers[:site].config['code_dir'].sub(/^\//,'') || 'downloads/code')
      code_path = (Pathname.new(context.registers[:site].source) + code_dir).expand_path
      file = code_path + @file

      return "Code directory '#{code_path}' cannot be a symlink" if File.symlink? code_path
      return "File #{file} not found" unless file.file?

      Dir.chdir(code_path) do
        text = file.read.strip
        safe_wrap(text)
      end
    end
  end

end

Liquid::Template.register_tag('include_file', Jekyll::IncludeFile)
