const app = Vue.createApp({
  data() {
    return {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      showMovies: true,
      movies: [
        {
          title: 'The Princess Bride',
          director: 'Rob Reiner',
          released: 1987,
          img: ''
        },
        {
          title: 'Office Space',
          director: 'Mike Judge',
          released: 1999,
          img: ''
        },
        {
          title: 'Blazing Saddles',
          director: 'Mel Brooks',
          released: 1974,
          img: ''
        }
      ],
      x: 0,
      y: 0
    };
  },
  methods: {
    toggleShowMovies() {
      this.showMovies = !this.showMovies;
    },
    handleEvent(e, data) {
      console.log(e.type);
      if (data) console.log(data);
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  }
});

app.mount('#app');
