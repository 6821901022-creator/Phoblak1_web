"use client"

export default function ProductForm() {
    return (
        <div>
            <h1>Product Form</h1>
            <form>
                <input name="name" placeholder="ชื่อสินค้า" />
                <input name="category" placeholder="ประเภทสินค้า" />
                <textarea name="description" placeholder="รายละเอียดสินค้า" ></textarea>
                <input name="price" placeholder="ราคา" />
                <input name="stock" placeholder="จำนวนในคลัง" />
                <button>บันทึก</button>
            </form>
        </div>
    );
}