//Calling models
const Contact = require("../models/contact");

// Home Page
exports.home = function (req, res) {
  // Rendering data from database
  Contact.find({})
    .then((contacts) => {
      // console.log(contacts);

      return res.render("home", {
        title: "Contact List Management With MongoDB",
        contact_lists: contacts,
      });
    })
    .catch((err) => {
      console.log("Error in fetching data");
      return;
    });
};

//Create Contact
exports.create = function (req, res) {
  // console.log(req.body);
  Contact.create({
    name: req.body.name,
    phone: req.body.phone,
  })
    .then((newCreate) => {
      // console.log(`New Contact is created successfully: ${newCreate}`)
      return res.redirect("success");
    })
    .catch((err) => {
      console.log(`Error to create new contact: ${err}`);
      return;
    });
};

// Edit Contact Details
exports.edit = function (req, res) {
    // console.log(req.params)
    Contact.findById(req.params.id)
      .then((data) => {
        // console.log(`Edit data: ${data}`)
  
        return res.render("edit", {
          title: "Update Contact",
          edit_contact: data,
        });
      })
      .catch((err) => {
        console.log(`Error to find data for edit in the database: ${err}`);
        return;
      });
  };
  
  // update contact
  exports.update = function (req, res) {
    // console.log(req.body);
  
    Contact.findByIdAndUpdate(req.body.id, {
      name: req.body.name,
      phone: req.body.phone,
    })
      .then(() => {
        return res.redirect("/");
      })
      .catch((err) => {
        console.log(`Error to update data ${err}`);
        return;
      });
  };
  

//Delete Contact from contact list
exports.delete = function (req, res) {
  // console.log(req.query);
  Contact.findByIdAndDelete(req.query.id)
    .then(() => {
      return res.redirect("back");
    })
    .catch((err) => {
      console.log(`Error is found to delte the data: ${err}`);
      return;
    });
};

