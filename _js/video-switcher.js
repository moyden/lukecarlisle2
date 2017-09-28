/* global Vue, videos */

let re = /http(s)?:\/\/(www\.)?vimeo.com\/(\d+)/
videos.forEach(function (video, i) {
  video.src = 'https://player.vimeo.com/video/' + video.url.match(re)[3]
  if (i === 0) video.active = true
  else video.active = false
})

const vm = new Vue({
  el: '#vuevm',

  data: {
    current: videos[0],
    catalog: videos
  },

  methods: {
    loadVideo: function (video) {
      this.current.active = false
      this.current = video
      this.current.active = true
    }
  }
})
