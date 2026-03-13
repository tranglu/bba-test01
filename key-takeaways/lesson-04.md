Object:
Object: giống như 1 hồ sơ ( record) - mỗi mục trong hồ sơ có key và value

Khai báo biến: 

Object literal ( phổ biến nhất)

let x ={

key1: value 1,

key2: value 2,

key3: value 3

};

dùng new object();

let x= new Object();

x.key1 = value 1;

Array:
let array=[value1, value2, value3, value4];

quy tác: array danh sách đánh số từ 0

khai báo array:

let array = new array (”tao”,”cam”,”a”);

chiều dài mảng: array.length

gán lại phần tử: array[index] = new value;

thêm cuối .push(value);

xóa cuối.pop();
Thao tác Cú pháp Ví dụ
Khai báo [] let arr = [1, 2, 3]
Truy xuất arr[index] arr[0] → 1
Đếm phần tử arr.length 3
Thêm cuối arr.push(val) arr.push(4)
Xoá cuối arr.pop() arr.pop()

Function
dùng cho khối lệnh sử dụng nhiều lần thì mình cần tạo 1 hàm để tiện việc sử dụng, tránh viết code nhiều lần

function x(){

các lệnh chạy;

}

// gọi biến

x();

Break: thoát khỏi vòng lặp ngay lặp tức ngay khi gặp phần tử không thỏa yêu cầu, sẽ không chạy tiếp cái phần tử phía sau

Continue: 
- continue là dùng bỏ qua phần còn lại của vòng lặp hiện tịa và chuyển sang lần lặp tiếp theo.
- i = 0 -> thỏa vòng lặp -> bỏ qua hàm console.log, chạy tiếp vòng lặp tiếp theo -> i = 0 -> k thỏa vòng lặp -> qua hàm console.log

Các câu điều kiện, vòng lặp nâng cao:
- if else; if elseif else; foEach