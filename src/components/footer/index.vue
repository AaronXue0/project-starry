<template>
  <v-footer padless outlined height="70px" color="secondary" fixed>
    <v-card class="flex" width="120%" elevation="0">
      <v-card-title class="ma-2">
        <v-col style="position: relative; top: -17px">
          <v-row>
            <p class="Noto">Project Starry Game</p>
            <v-spacer />
            <p class="Noto" style="font-size: 11px">© 2019 Starry Game</p>
          </v-row>
          <v-row>
            <p
              class="Noto"
              style="
                font-size: 11px;
                position: relative;
                top: -20px;
                margin-left: 1px;
              "
            >
              an indie games team from Taipei, Taiwan.
            </p>
            <v-spacer />
            <v-btn
              color="white"
              v-for="(item, index) in media"
              :key="index"
              style="position: relative; top: -20px"
              :href="item.linking"
              icon
              x-small
            >
              <v-icon dark small>{{ item.icon }}</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      media: [
        {
          icon: "fab fa-facebook-f",
          linking: "https://www.facebook.com/Game-Starry-109356847225732",
        },
        { icon: "mdi-twitter", linking: "https://twitter.com/projectstarry1" },
        {
          icon: "mdi-instagram",
          linking: "https://twitter.com/projectstarry1",
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.footer {
  background-color: linear-gradient(to bottom right, #1d3a50, #504b79);
}
.payButton {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}

.iconColor {
  color: #1d3a50 !important;
}

p.Noto {
  color: aliceblue;
}

.flex {
  background-image: linear-gradient(to top right, #1d3a50, #504b79);
}
</style>
