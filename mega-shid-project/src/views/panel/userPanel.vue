<template>
  <div>
      <panelLayout>
          <table>
              <thead>
              <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>company name</th>
                  <th>نام سازمان</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>{{this.$store.state.user_data.username}}</td>
                  <td>{{this.$store.state.user_data.email}}</td>
                  <td>{{this.$store.state.user_data.companyName}}</td>
                  <td>{{this.$store.state.user_data.companyNameFa}}</td>
              </tr>

              </tbody>
          </table>
      </panelLayout>
  </div>
</template>

<script>
import panelLayout from '@/layout/userPanel.vue'
export default {
  name: 'UserPanel',
    components: {
      panelLayout
    }
}
</script>

<style scoped>
table {
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
}

th, td {
    padding: 10px;
    border: 1px solid #ccc;
}

th {
    text-align: center;
    background-color: #e3f2fd;
    color: #333;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

tr:hover {
    background-color: #e3f2fd;
}

th, td:not(:last-child) {
    border-right: 1px solid #ccc;
}

</style>