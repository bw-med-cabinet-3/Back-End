
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('first_name', 128)
        .nonNullable();
    tbl.string('last_name', 128)
        .nonNullable();
    tbl.unique('email')
        .nonNullable();
    tbl.string('password', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
