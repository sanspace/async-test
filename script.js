var targets = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3',
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
];

targets.forEach(function(url){
   console.log(url);
   jQuery.get(url, function(data){
       jQuery('#content')
        .append(url + ' ' + data.title + '<br>');
   });
});