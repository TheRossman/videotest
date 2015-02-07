module.exports = function(grunt) {
  var basecampValues = {
    url: '<%= secret.basecamp.endpoint %>projects/4955897/messages.json',
    auth: {
      user: '<%= secret.basecamp.username %>',
      pass: '<%= secret.basecamp.password %>'
    },
    headers: {
      'Content-Type' : 'application/json',
      'User-Agent': 'Shaw Bot - devadmin@smdg.ca'
    },
    subscribers: [4255481, 3166362, 3166416, 3166407, 6915716, 3166516, 3166552, 3166398, 3166397, 3181690, 3166430, 6916338, 3166448, 3166406, 3166534]
  };

  grunt.config('http', {
    basecamp_post: {
      options: {
        url: basecampValues.url,
        auth: basecampValues.auth,
        headers: basecampValues.headers,
        method: 'POST',
        json: {
          "subject": "RELEASE: Version <%= pkg.version %>",
          "content": "https://static.smdg.ca/videodrome/<%= pkg.version %>/index.html \n\n <%= templog %>",
          "subscribers": basecampValues.subscribers
        }
      }
    },

    basecamp_post_stable: {
      options: {
        url: basecampValues.url,
        auth: basecampValues.auth,
        headers: basecampValues.headers,
        method: 'POST',
        json: {
          "subject": "STABLE RELEASE: Version <%= pkg.version %>",
          "content": "https://static.smdg.ca/videodrome/stable/index.html \n Uses version <%= pkg.version %>",
          "subscribers": basecampValues.subscribers
        }
      }
    }
  });
};


