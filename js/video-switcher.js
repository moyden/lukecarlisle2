/* global Vue, videos */

videos.sort(function (a, b) {
  return a.order - b.order
})

var re = /http(s)?:\/\/(www\.)?vimeo.com\/(\d+)/
var vimeos = videos.filter(function (video) {
  return video.url.match(re) != null
})
vimeos.forEach(function (video, i) {
  video.src = 'https://player.vimeo.com/video/' + video.url.match(re)[3]
  if (i === 0) video.active = true
  else video.active = false
})

var vm = new Vue({
  el: '#vuevm',

  data: {
    current: vimeos[0],
    catalog: vimeos
  },

  methods: {
    loadVideo: function (video) {
      this.current.active = false
      this.current = video
      this.current.active = true
    }
  }
})
