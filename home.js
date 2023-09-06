
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*--------==============Create a New Model============-----------------------*/

$(document).ready(function() {
  $(".delete").hide();
  //when the Add Field button is clicked
  $("#add").click(function(e) {
    $(".delete").fadeIn("1500");
    //Append a new row of code to the "#items" div
    $("#items").append(
      '<div class="next-referral col-4"><input id="textinput" name="textinput" type="text" placeholder=" Name " class="form-control input-md"></div>'
    );
  });
  $("body").on("click", ".delete", function(e) {
    $(".next-referral").last().remove();
  });
});

const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('departments', {
      deptNo: {
        type: DataTypes.STRING,
        field: 'dept_no',
        primaryKey: true,
        allowNull: false
      },
      deptName: {
        type: DataTypes.STRING,
        field: 'dept_name',
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('departments');
  },
};
  