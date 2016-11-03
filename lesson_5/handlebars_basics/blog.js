$(function() {
  var posts = [{
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 1, 2015',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    tags: ['ruby', 'javascript', 'html', 'css'],
  },
  {
    title: 'Second post',
    published: 'November 3, 2016',
    body: 'Nunc auctor tortor ante, vel lacinia nibh porta id. Integer sit amet congue purus. Etiam eget elit quis urna facilisis gravida. Etiam euismod diam mi, vel vehicula nunc faucibus sed. Suspendisse posuere neque orci, in commodo mi dignissim ac. Phasellus sed nibh eleifend, volutpat nibh et, eleifend ligula. Suspendisse commodo faucibus urna, a volutpat urna fringilla quis. Proin porta, sapien ut dapibus posuere, sapien mauris pharetra eros, et placerat ex turpis in mi. Cras elementum tristique magna, ut rutrum dolor mattis a. Etiam venenatis sed urna sit amet lacinia. In lacinia, lorem vitae tincidunt pretium, ipsum nibh malesuada turpis, et maximus eros libero sagittis sem.',
    tags: [],
  }];
  var postsTemplate = Handlebars.compile($('#posts').html());

  Handlebars.registerPartial('tag', $('#tag').html());

  $('body').append(postsTemplate({ posts: posts }));
});