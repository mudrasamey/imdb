export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
   */

  this.namespace = '/api';
  let rentals = [
    {
      type: 'rentals',
      id: 'forest-gump',
      attributes: {
        title: "Forrest Gump",
        owner: "Robert Zemeckis",
        city: "1994",
        category: "Movie",
        bedrooms: 8.8,
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL50_.jpg",
        description: "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75."
      }
    },
    {
      type: 'rentals',
      id: 'shawshank-redemption',
      attributes: {
        title: "The Shawshank Redemption",
        owner: "Frank Darabont",
        city: "1994",
        category: "Movie",
        bedrooms: 9.3,
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
      }
    },
    {
      type: 'rentals',
      id: 'perks-wallflower',
      attributes: {
        title: "The Perks of Being a Wallflower",
        owner: "Stephen Chbosky",
        city: "2012",
        category: "Movie",
        bedrooms: 8.0,
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzIxOTQyODU1OV5BMl5BanBnXkFtZTcwMDQ4Mjg4Nw@@._V1_QL50_SY1000_CR0,0,676,1000_AL_.jpg",
        description: "An introvert freshman is taken under the wings of two seniors who welcome him to the real world."
      }
    },
    {
      type: 'rentals',
      id: 'dark-knight',
      attributes: {
        title: "The Dark Knight",
        owner: "Christopher Nolan",
        city: "2008",
        category: "Movie",
        bedrooms: 9.0,
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg",
        description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."
      }
    },
    {
      type: 'rentals',
      id: 'dark-knight',
      attributes: {
        title: "Changeling",
        owner: "Clint Eastwood",
        city: "2008",
        category: "Movie",
        bedrooms: 7.8,
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTA1Mzg3NjIxNV5BMl5BanBnXkFtZTcwNzU2NTc5MQ@@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg",
        description: "A grief-stricken mother takes on the LAPD to her own detriment when it tries to pass off an obvious impostor as her missing child."
      }
    },
    {
      type: 'rentals',
      id: 'boys-life',
      attributes: {
        title: "This Boy's Life",
        owner: "Michael Caton-Jones",
        city: "1993",
        category: "Movie",
        bedrooms: 7.8,
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BODA5ZTBjNjktZTc0OS00Yjc5LWJiNzUtYmRhYjVkYTI4MWExL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL50_SY1000_CR0,0,666,1000_AL_.jpg",
        description: "The story about the relationship between a rebellious 1950s teenager and his abusive stepfather, based on the memoirs of writer and literature Professor Tobias Wolff."
      }
    },
    {
      type: 'rentals',
      id: 'wonderful-life',
      attributes: {
        title: "It's a Wonderful Life",
        owner: "Frank Capra",
        city: "1946",
        category: "Movie",
        bedrooms: 8.6,
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_QL50_SY1000_CR0,0,687,1000_AL_.jpg",
        description: "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed."
      }
    }
  ];

  this.get('/rentals', function(db, request) {
    if (request.queryParams.title !== undefined) {
      let filteredRentals = rentals.filter(function (i) {
        return i.attributes.title.toLowerCase().indexOf(request.queryParams.title.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });

  this.get('/rentals/:id', function (db, request) {
    return { data: rentals.find((rental) => request.params.id === rental.id) };
  });

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
  */
}
