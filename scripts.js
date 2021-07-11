let inputData = {
  dimensions: [
    {
      id: "dimension_re",
      values: ["East", "East", "West", "West", "South"],
    },
    {
      id: "dimension_cnt",
      values: ["London", "Italy", "Germany", "Germany", "Russia"],
    },
    {
      id: "measure_sales",
      values: [100, 156, 432, 462, 25],
    },
    {
      id: "measure_qty",
      values: [85, 34, 153, 434, 52],
    },
    {
      id: "measure_profit",
      values: [123, 45, 421, 465, 451],
    },
  ],
  metadata: [
    {
      id: "dimension_re",
      label: "Region",
    },
    {
      id: "dimension_cnt",
      label: "County",
    },
    {
      id: "measure_sales",
      label: "Sales",
    },
    {
      id: "measure_qty",
      label: "Quantity",
    },
    {
      id: "measure_profit",
      label: "Profit",
    },
  ],
};

/* let expectdData =[{
    "Region": "East",
    "County": "London",
    "Sales": 100,
    "Quantity": 85,
    "Profit": 123
  }, {
    "Region": "East",
    "County": "Italy",
    "Sales": 156,
    "Quantity": 34,
    "Profit": 45
  }, {
    "Region": "West",
    "County": "Germany",
    "Sales": 432,
    "Quantity": 153,
    "Profit": 421
  }, {
    "Region": "West",
    "County": "Germany",
    "Sales": 462,
    "Quantity": 434,
    "Profit": 465
  }, {
    "Region": "South",
    "County": "Russia",
    "Sales": 25,
    "Quantity": 52,
    "Profit": 451
  }] */

function print(inputData) {
  var result = [];
  let count = 0;
  inputData.metadata.map((ele) => {
    let obj = {};
    obj["id"] = count;
    obj[ele.label] = null;
    result.push(obj);
    count++;
  });
  result.map((res) => {
    inputData.metadata.map((ele) => {
      inputData.dimensions.map((dimen) => {
        if (ele.id == dimen.id) {
          for (let i = 0; i < dimen.values.length; i++) {
            if (res.id == i) {
              res[ele.label] = dimen.values[i];
            }
          }
        }
      });
    });
    delete res.id;
  });
  console.log(result);
}

print(inputData);
