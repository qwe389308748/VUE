<template>
  <div class="student">
    <StudentAdd />
    <hr>
    <StudentList />
  </div>
</template>

<script>
import StudentAdd from '../components/StudentAdd';
import StudentList from '../components/StudentList';
export default {
  components:{
    StudentAdd,
    StudentList
  }
}
</script>