<template>
  <div class="container">
    <table>
      <!-- Table headers -->
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Subcountry</th>
          <th>GeoNameID</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <!-- Table rows -->
        <tr v-for="city in citiesToShow" :key="city.geonameid">
          <td>{{ city.name }}</td>
          <td>{{ city.country }}</td>
          <td>{{ city.subcountry }}</td>
          <td>{{ city.geonameid }}</td>
          <td>
            <!-- Details paragraph always rendered -->
            <p>
              The city of {{ city.name }} has GeoNameID: {{ city.geonameid }}
              and is in Country: {{ city.country }}.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="loadMore">Load More</button>
  </div>
</template>

<script src="./CitiesTable.js"></script>

<style>
@import "../assets/styles/main.css";
@import "../assets/styles/table.css";
/* Add styles for .container, table, and button here */
</style>
