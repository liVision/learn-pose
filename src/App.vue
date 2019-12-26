<template>
  <div id="app">
    <div class="left">
      <ul>
        <li>
          <router-link to="/">Get started</router-link>
        </li>
        <li>
          Custom Transitions
          <ul>
            <li>
              <router-link to="/Tween">Tween</router-link>
            </li>
            <li>
              <router-link to="/Spring">Spring</router-link>
            </li>
            <li>
              <router-link to="/Decay">Decay</router-link>
            </li>
            <li>
              <router-link to="/Keyframes">Keyframes</router-link>
            </li>
            <li>
              <router-link to="/Physics">Physics</router-link>
            </li>
          </ul>
        <li>
          <router-link to="/DynamicProps">Dynamic pose props</router-link>
        <li>
          <router-link to="/AnimatingChildren">Animating children</router-link>
        <li>
          UI events and interactions
          <ul>
            <li>
              <router-link to="/Drag">Drag</router-link>
            </li>
            <li>
              <router-link to="/DragTransition">DragTransition</router-link>
            </li>
            <li>
              <router-link to="/DragEvent">DragEvent</router-link>
            </li>
            <li>
              <router-link to="/Press">Press</router-link>
            </li>
            <li>
              <router-link to="/Hover">Hover</router-link>
            </li>
            <li>
              <router-link to="/Focus">Focus</router-link>
            </li>
          </ul>
        </li>
        <li>
          Enter/exit transitions
          <ul>
            <li>
              <router-link to="/EnterExit">EnterExit</router-link>
            </li>
            <li>
              <router-link to="/EnterExitTest">EnterExitTest</router-link>
            </li>
          </ul>
        <li>
          Passive values
          <ul>
            <li>
              <router-link to="/PassiveOpacity">PassiveOpacity</router-link>
            </li>
            <li>
              <router-link to="/PassiveDiagonal">EnterExitTest</router-link>
            </li>
            <li>
              <router-link to="/nonNumerical">nonNumerical</router-link>
            </li>
            <li>
              <router-link to="/PassiveAncestors">PassiveAncestors</router-link>
            </li>
          </ul>
        <li>
          <router-link to="/Flip">FLIP</router-link></li>
        <li>
          <router-link to="/Image">Tutorial: Medium-style image</router-link>
        <li>
          <router-link to="/zoom">zoom</router-link>
        </li>
      </ul>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <div class="right">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  .left {
    height: 100vh;
    margin-top: 200px;
    float: left;
    width: 40%;
    li {
      cursor: pointer;
      a {
        font-weight: bold;
        color: #2c3e50;
      }
      a.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .right {
    border: 1px solid black;
    width: 50%;
    height: 100vh;
    margin-top: 200px;
    float: left;
    overflow: hidden;
  }
}
</style>
