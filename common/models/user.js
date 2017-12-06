module.exports = function (user) {

  // Set the username to the users email address by default.
  user.observe('before save', function setDefaultUsername(ctx, next) {
    if (ctx.instance) {
      if(ctx.isNewInstance) {
        ctx.instance.username = ctx.instance.email;
      }
      ctx.instance.status = 'created';
      ctx.instance.created = Date.now();
    }
    next();
  });


  // user.bonus = function(id,point, cb) {
  //   console.log(id,point);
  //   user.findById(id, function(err, page) {
  //     if (err) {
  //       return cb(err);
  //     }
  //     var result = page;
  //     result.bonus += point;
  //     user.upsert(result);
  //     cb(err, result.bonus);
  //   });
  // };
  //
  // user.remoteMethod(
  //   'bonus', {
  //     accepts: [
  //       {
  //         arg: 'id', type: 'number', required: true
  //       },{
  //         arg: 'point', type: 'number', required: true
  //       },
  //     ],
  //     returns: {
  //       arg: 'Điểm hiện tại:',
  //       type: 'string'
  //     },
  //     http: {path: '/bonus/:id/:point',verb: 'post'}
  //   }
  // );

};
