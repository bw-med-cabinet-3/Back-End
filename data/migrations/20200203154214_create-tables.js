
exports.up = function(knex) {
  return knex.schema.createTable('Users', tbl => {
        tbl.increments('user_id');
        tbl.string('first_name')
            .notNullable();
        tbl.string('last_name')
            .notNullable();
        tbl.string('email')
            .notNullable()
            .unique();
        tbl.string('password', 128)
            .notNullable();
  })
  .createTable('Strains', tbl => {
        tbl.increments('strain_id');
        tbl.string('strain_name')
            .notNullable()
            .unique();
        tbl.string('strain_type')
            .notNullable();
        tbl.integer('strain_rating');
        tbl.text('strain_description');
        tbl.string('strain_effects');
        tbl.string('strain_flavors');
  })
//   .createTable('Types', tbl => {
//       tbl.increments('type_id');
//       tbl.string('type')
//         .notNullable()
//         .unique();
//   })
//   .createTable('Effects', tbl => {
//         tbl.increments('effect_id');
//         tbl.string('effect')
//             .notNullable()
//             .unique();
//   })
//   .createTable('Flavors', tbl => {
//     tbl.increments('flavor_id');
//     tbl.string('flavor')
//         .notNullable()
//         .unique();
// })
// .createTable('Symptoms', tbl => {
//     tbl.increments('symptom_id');
//     tbl.string('symptom')
//         .notNullable()
//         .unique();
// })
// .createTable('Saved_Strains', tbl => {
//     tbl.increments('saved_strain_id');
//     tbl.integer('user')
//         .unsigned()
//         .notNullable()
//         .references('user_id')
//         .inTable('Users');
//     tbl.integer('strain')
//         .unsigned()
//         .notNullable()
//         .references('strain_id')
//         .inTable('Strains');
// })
// .createTable('Strain_Types', tbl => {
//     tbl.increments('strain_type_id');
//     tbl.integer('strain')
//         .unsigned()
//         .notNullable()
//         .references('strain_id')
//         .inTable('Strains');
//     tbl.integer('type')
//         .unsigned()
//         .notNullable()
//         .references('type_id')
//         .inTable('Types');
// })
// .createTable('Strain_Effects', tbl => {
//     tbl.increments('strain_effect_id');
//     tbl.integer('strain')
//         .unsigned()
//         .notNullable()
//         .references('strain_id')
//         .inTable('Strains');
//     tbl.integer('effect')
//         .unsigned()
//         .notNullable()
//         .references('effect_id')
//         .inTable('Effects');
// })
// .createTable('Strain_Flavors', tbl => {
//     tbl.increments('strain_flavor_id');
//     tbl.integer('strain')
//         .unsigned()
//         .notNullable()
//         .references('strain_id')
//         .inTable('Strains');
//     tbl.integer('Flavor')
//         .unsigned()
//         .notNullable()
//         .references('flavor_id')
//         .inTable('Flavors');
// })
// .createTable('Strain_Symptoms', tbl => {
//     tbl.increments('strain_symptom_id');
//     tbl.integer('strain')
//         .unsigned()
//         .notNullable()
//         .references('strain_id')
//         .inTable('Strains');
//     tbl.integer('symptom')
//         .unsigned()
//         .notNullable()
//         .references('symptom_id')
//         .inTable('Symptoms');
// })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('Strains')
        .dropTableIfExists('Users')
};
