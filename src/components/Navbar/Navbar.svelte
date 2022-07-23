<script>
  let tabs = [
    { name: 'Home', to: '#presentation' },
    { name: 'Projects', to: '#projects' },
    { name: 'Contact', to: '#contact' }
  ]
</script>

<nav class="navbar">
  <ul class="navbar-items">
    {#each tabs as tab}
      <li>
        <a href={tab.to}>{tab.name}</a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .navbar {
    position: fixed;
    min-width: 250px;
    padding: 3px;
    margin-top: 15px;
    border-radius: 10px;
    background-color: #111827;
    left: 50%;
    transform: translate(-50%, 0);
    border: 2px solid #1e40af;
    z-index: 1;
  }

  .navbar-items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  li {
    list-style: none;
    margin: 0 2px;
    border-radius: 10px;
    cursor: pointer;
  }

  a {
    color: #1e40af;
    display: block;
    padding: 10px 20px;
    text-decoration: none;
  }

  a:visited {
    color: #1e40af;
  }
</style>
