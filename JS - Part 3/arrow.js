let obj = {
    name: "aditya",
    age: 25,
    sayName: function () {
        let abc = () => {
            console.log(this);
        };
        abc();
    },
};
obj.sayName();