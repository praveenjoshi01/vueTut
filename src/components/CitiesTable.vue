<template>
  <div class="sse-project container-fluid">
    <h1 class="text-center mt-4 mb-4">SSE Project</h1>
    <div class="row">
      <div class="table-column col-md-6">
        <table class="table table-responsive">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Country</th>
              <th scope="col">Subcountry</th>
              <th scope="col">GeoNameID</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="city in citiesToShow" :key="city.geonameid" @click="selectCity(city)">
              <td>{{ city.name }}</td>
              <td>{{ city.country }}</td>
              <td>{{ city.subcountry }}</td>
              <td>{{ city.geonameid }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-column col-md-6">
        <h2 class="text-column-header">Dynamic Text</h2>
        <!-- Conditional rendering for the dynamic text or default message -->
        <p v-if="selectedCity">
          The city of {{ selectedCity.name }} has GeoNameID: {{ selectedCity.geonameid }}
          and is in Country: {{ selectedCity.country }}.
        </p>
        <p v-else>Please click any row to generate dynamic text</p>
      </div>
    </div>
    <div class="load-more-container text-center mt-3">
      <button class="btn btn-primary" @click="loadMore">Load More</button>
    </div>
  </div>
</template>



<script src="./CitiesTable.js"></script>

<style>
@import "../assets/styles/main.css";
@import "../assets/styles/table.css";
@import "../assets/styles/mobilerespo.css";
</style>
