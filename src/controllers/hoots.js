
const hoot = await Hoot.findById(req.params.hootId).populate([
    'author',
    'comments.author',
  ]);
  