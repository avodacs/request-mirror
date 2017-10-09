let app = new Vue({
  el: '#app',
  data: {
    requests: null,
    protocol: 'https',
    url: null
  },
  computed: {
    fullUrl: function() {
      return `${this.protocol}://${this.url}`;
    }
  },
  mounted() {
    this.loadinspect();
  },
  methods: {
    getTag: function (method) {
      switch (method) {
        case 'DELETE':
          return 'is-danger';
        case 'GET':
          return 'is-success';
        case 'PATCH':
          return 'is-warning';
        case 'POST':
          return 'is-warning';
        case 'PUT':
          return 'is-warning';
        default:
          return 'is-primary';
      }
    },
    loadinspect: function () {
      let self = this;

      let token = document.getElementById('token').value;
      this.url = document.getElementById('url').value;

      axios({
          method: 'get',
          url: `/inspect/${token}`,
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(function (response) {
          self.requests = response.data;
        })
        .then(function (error) {
          // console.error(error);
        });
    }
  }
});
