module.exports = function(grunt){

  var clScaffold = {
    after: 'v<%= oldPkg.version %>',
    featureRegex: /^\[new\] ?(.*)$/gmi,
    fixRegex: /^\[fix\] ?(.*)$/gmi,
    indvPartial: '* {{this}}\n'
  }

  grunt.config('changelog', {
    temp_log: {
      options: {
        after: clScaffold.after,
        dest: '.templog.txt',
        featureRegex: clScaffold.featureRegex,
        fixRegex: clScaffold.fixRegex
      }
    },

    changelog_md: {
      options: {
        after: clScaffold.after,
        dest: 'CHANGELOG.md',
        template: '## Version <%= pkg.version %> - {{date}}\n\n{{> features}}{{> fixes}}',
        partials: {
          features: '#### NEW:\n\n{{#if features}}{{#each features}}{{> feature}}{{/each}}{{else}}{{> empty}}{{/if}}\n',
          feature: clScaffold.indvPartial,
          fixes: '#### FIXES:\n\n{{#if fixes}}{{#each fixes}}{{> fix}}{{/each}}{{else}}{{> empty}}{{/if}}',
          fix: clScaffold.indvPartial
        },
        insertType: 'prepend',
        featureRegex: clScaffold.featureRegex,
        fixRegex: clScaffold.fixRegex
      }
    }
  });
};
