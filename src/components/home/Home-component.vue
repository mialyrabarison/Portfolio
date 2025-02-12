<template>
  <div class="about" id="home">
    <div class="profil">
      <h1 id="RABARISON">I'm <span>Mialy RABARISON</span></h1>
      <p class="talent-skills"><span>"TALENT & SKILLS"</span> Co-fondeur</p>
      <p id="resume">
        University graduate in Economics and Management, expertise and skills
        invested in the service of children's health as "health officer "UNICEF
        in Madagascar. <br />
        Co-founder of Talent & Skills, fully invested in education,
        training and support for young people, particulary in Togo. <br />
        Actually, a CEF student developer Web.
      </p>
    </div>
    <div class="photo">
      <img
        :src="require('@/assets/image/MIALY-PHOTO.jpg')"
        alt="photo"
        class="mialy"
      />
      <!-- <img :src="image" alt="Logo"> -->
    </div>
  </div>

  <div class="Achievment">
    <h1>My creations</h1>

    <button @click="openButton" class="button">
      <div class="inner">nouvelle création</div>
    </button>
    <!-- creer The Modalformulaire -->
    <div id="formulaire" class="modal">
      <div class="modal-content">
        <!-- <span class="close" @click="closeModalFormulaire">&times;</span> -->
        <div class="information-form">
          <div class="my-new-creation">
            <!-- <label for="new-creation"></label>  Alana rehefa tsy ilaina-->
            <!-- id na class reference  isintomana ilay objet na input , name ampiasaina any amin donnée any amin fonction javascript-->
            <input
              type="text"
              v-model="titleNewCreation"
              id="title-new-creation"
              name="title-new-creation"
              placeholder="My new creation.."
            />

            <input
              type="file"
              id="new-image-creation"
              name="new-image-creation"
            />

            <input
              type="text"
              v-model="newCreationDate"
              name="new-creation-date"
              id="new creation-date "
              placeholder="Creation date..."
            />

            <input
              type="text"
              v-model="newTechnology"
              name="new-technology"
              id="new-technology "
              placeholder="New technology..."
            />

            <input
              type="text"
              v-model="newLink"
              name="new-link"
              id="new-link "
              placeholder="link.."
            />

            <input
              type="file"
              id="new-image-details"
              name="new-image-details"
            />

            <button @click="addnewcreation">create</button>
          </div>
        </div>
      </div>
      <!-- End Modal1 -->
    </div>

    <div class="creativity">
      <!-- First creation -->
      <div class="creation">
        <p>CV online</p>
        <!-- Open Modalbutton1 -->
        <img
          @click="openModal(1)"
          id="myBtn1"
          :src="require('@/assets/image/CV online.png')"
          alt="HTML-CSS"
        />
        <!-- End  Open Modalbutton1 -->
        <!-- The Modal1 -->
        <div id="myModal1" class="modal">
          <div class="modal-content">
            <!-- <span class="close" @click="closeModal(1)">&times;</span> -->
            <h1>CV online</h1>
            <div class="specification">
              <ul>
                <li>creation date:14 /09/2024</li>
                <li>
                  Technologies used: <br />
                  W3C recommandation on HTML 5 & CSS 3(flexbox); <br />
                  Git, Github, <br />
                  (utilisation de visual code)
                </li>
                <li>
                  <a
                    href="https://github.com/mialyrabarison/CV-MIALY-CEF"
                    target="_blank"
                    >Github link
                    <!-- target blank:ouvrir un lien dans une autre fenêtre -->
                  </a>
                </li>
              </ul>
            </div>

            <img
              :src="require('@/assets/image/photo-modal-html-css.png')"
              alt="HTML-CSS"
            />
          </div>
        </div>
        <!-- End Modal1 -->
      </div>
      <!-- End First creation -->

      <!-- second creation -->
      <div class="creation">
        <p>Specification document</p>
        <!-- open Modalbutton2 -->
        <img
          @click="openModal(2)"
          id="myBtn2"
          :src="require('@/assets/image/CAHIER-DES-CHARGES.jpg')"
          alt="CAHIER-DES-CHARGES"
        />
        <!-- end modalbutton2 -->
        <!-- The Modal2 -->
        <div id="myModal2" class="modal">
          <div class="modal-content">
            <!-- <span class="close" @click="closeModal(2)">&times;</span> -->
            <h1>Specification document</h1>
            <div>
              <ul>
                <li>Creation date:21/11/2024</li>
                <li>
                  Technical and skills acquires: <br />
                  Define tructure of a specification website document; <br />
                  Define the goals of a website; <br />
                  Analyze target; <br />
                  Establish the technical specifications;<br />
                  Choose a website development platform; <br />
                  Define the content; <br />
                  Plan the design and layout. <br />
                  Define the budget and schedule. <br />
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1MswIr7JXG074wAaqQzkrtYS0gri0qMj-/view?usp=drive_link"
                    target="_blank"
                    >Goggle drive link
                  </a>
                </li>
              </ul>
            </div>

            <img
              :src="require('@/assets/image/Photo-modal-CDC.png')"
              alt="specification Image"
            />
            <!-- alt pour reconnaitre une image -->
          </div>
        </div>
        <!-- End Modal2 -->
      </div>
      <!-- End second creation -->

      <!-- last creation -->
      <div class="creation">
        <p>Portfolio</p>
        <!-- open modalbutton3 -->
        <img
          @click="openModal(3)"
          id="myBtn3"
          :src="require('@/assets/image/Portfolio.png')"
          alt="JavaScript"
        />
        <!-- end Modalbutton3 -->
        <!-- The Modal 3 -->
        <div id="myModal3" class="modal">
          <div class="modal-content">
            <!-- <span class="close" @click="closeModal(3)">&times;</span> -->
            <h1>Portfolio</h1>
            <div>
              <ul>
                <li>creation date: 12/02/2025</li>
                <li>
                  Technologies used: <br />
                  HTML 5, CSS 3, JavaScript; <br />
                  Git,github; <br />
                  (visual studio code) HTML & CSS; <br />
                  
                </li>
                <li>
                  <a
                    href="https://mialyrabarison.github.io/Dynamiser-Commentaire/"
                    target="_blank"
                    >Lien sur github
                  </a>
                </li>
              </ul>
            </div>

            <img
              :src="require('@/assets/image/Phto-modal-portfolio.png')"
              alt=" vueJS image"
            />
          </div>
          <!-- end Modal3 -->
        </div>
      </div>
      <!-- new modal creation -->
      <!-- div class creation v-for: boucler les items -->
      <div class="creation" v-for="(item, index) in creations" :key="index">
        <p>{{ item.title }}</p>
        <img
          @click="openModal(index)"
          :id="'myBtn' + index"
          :src="item.image"
          :alt="item.alt"
        />

        <div :id="'myModal' + index" class="modal">
          <div class="modal-content">
            <!-- <span class="close" @click="closeModal(index)">&times;</span> -->
            <h1>{{ item.title }}</h1>
            <div class="specification">
              <ul>
                <li>Creation date: {{ item.date }}</li>
                <li>Technologies used: {{ item.technologies }}</li>
                <li>
                  <a :href="item.link" target="_blank">{{ item.linkText }}</a>
                </li>
              </ul>
            </div>
            <img :src="item.image" :alt="item.alt" />
          </div>
        </div>
      </div>
      <!-- end new modal creation -->
    </div>

    <div class="message">
      <h1>Contact form</h1>
      <div class="form">
        <form action="">
          <div class="form-action">
            <label for="name">Name</label>
            <input type=" " id="name" name="name" placeholder="your name.." />
          </div>
          <div class="form-action">
            <label for="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="your subject"
            />
          </div>
          <div class="form-action">
            <label for="creation date">Date de création</label>
            <input
              type="text"
              id="creation date"
              name="creation date"
              placeholder="date"
            />
          </div>
          <div class="bouton">
            <!-- <button type="submit">Submit</button> -->
            <!-- From Uiverse.io by Spacious74 -->
            <button class="button">
              <div class="inner">Submit</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  data() {
    // mettre  Declaration variables dans la Data(){return{on met ivci les v-model séparé par virgule}}
    return {
      titleNewCreation: "",
      newCreationDate: "",
      newTechnology: "",
      newLink: "",
      // declaration de variable de type tableau pour stocker les données
      creations: [],
      // declaration du données a stocker dans le tableau
      newCreation: {
        title: "",
        image: "",
        alt: "",
        date: "",
        technologies: "",
        link: "",
        linkText: "",
      },
    };
  },
  methods: {
    // on met dans methode toutes les fonction
    openModal(id) {
      // Get the modal
      var modal = document.getElementById("myModal" + id);

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn" + id);

      // When the user clicks on the button, open the modal
      btn.onclick = function () {
        modal.style.display = "block";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },

    closeModal(id) {
      // Get the modal
      var modal = document.getElementById("myModal" + id);

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[id - 1];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
      };
    },
    openButton() {
      // Get the modal
      var modal = document.getElementById("formulaire");
      // Display the modal formulaire when clicked on the button who called this function
      modal.style.display = "block";
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
    closeModalFormulaire() {
      // Youre code here to close the modal
    },
    // manokatra fonction : anarana fonction izay atao explicte tsara() {}. ao anatin io fonction no maka ny données rehetra
    addnewcreation() {
      // const titleNewCreation = document.getElementsByName("title-new-creation");
      console.log("newtitre : " + this.titleNewCreation);
      console.log("newdate:" + this.newCreationDate);
      console.log("newtechnology:" + this.newTechnology);
      console.log("newlink:" + this.newLink);

      this.newCreation = {
        title: this.titleNewCreation,
        image: "",
        alt: "",
        date: this.newCreationDate,
        technologies: this.newTechnology,
        link: "",
        linkText: this.newLink,
      };

      // ajoute le nouveau creation dans le tableau creations[]
      this.creations.push({ ...this.newCreation });
    },
  },
};
</script>

<style scoped src="./home.css"></style>
