// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
     {
          name:"Ahmed",
          photo:"https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__340.jpg",
          scores:[
               5,
               1,
               4,
               4,
               5,
               1,
               2,
               5,
               4,
               1
          ]
     },
     {
          name:"Michael",
          photo:"https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__340.jpg",
          scores:[
               3,
               3,
               2,
               3,
               5,
               2,
               2,
               3,
               4,
               2
          ]
     }
        
   ];
   
   // Note how we export the array. This makes it accessible to other files using require.
   module.exports = friendArray;
   