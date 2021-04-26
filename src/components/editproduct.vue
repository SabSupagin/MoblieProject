<template>
    <form>
        <center>
        <h1>แก้ไขสต็อกสินค้า</h1>
        </center>
        <div class="form-group">
            <label for="exampleInputEmail1">ชื่อสินค้า</label>
            <input type="Text" class="form-control" v-model="nameproduct">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">คำอธิบายสินค้า</label>
            <input type="Text" class="form-control" v-model="detailproduct">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">ยี่ห้อ</label>
            <input type="Text" class="form-control" v-model="type">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">ราคาสินค้า</label>
            <input type="Text" class="form-control" v-model="price">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">สต็อก(จำนวน)</label>
            <input type="Text" class="form-control" v-model="stock">
        </div>
        <center>
        <div class="clearfix">
        <router-link to="/stock"><button class="btn btn-danger" style="margin-right: 10%">Back</button></router-link>
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        </center>
    </form>
</template>