//membuat array
  let song = ['song A', 'songB', 'song C']

// mendapat nilai index
  console.log(song[2])

// mengubah isi
  song[1] = 'song change'

//method array
  let app = []

      //1 push (menambah adat apaling akhir)
      app.push(10, 2, 3, 4)
      console.log(app)

      //2 pop mengambil data yang paling akhir urutannya
      app.pop()

      //3 unshift (menambah data diawal)
      app.unshift(1, 2, 3)

      //4 shitf (menghapus data dari awal)
      app.shift()

      //5 concat ( menggabungkan 2 array)
      let array1 = [1, 2, 3]
      let array2 = ['a', 'b', 'c']
      let array3 = array1.concat(array2)
      console.log(array3)

      //6. includes (seperti index of tetapi mengeluarkan output boolean ( true or false))
      array1.includes(2) // output true

      //7. sort (mengurutkan jika huruhf alphaber sedangkan angka tidak)
      const months = ['March', 'Jan', 'Feb', 'Dec']
      months.sort()
      console.log(months)
      // Expected output: Array ["Dec", "Feb", "Jan", "March"]

      const array = [1, 30, 4, 21, 100000]
      array1.sort()
      console.log(array)
      // Expected output: Array [1, 100000, 21, 30, 4]

      // 8.method splice
      const bulan = ['Jan', 'March', 'April', 'June']
      months.splice(1, 0, 'Feb')
      // Inserts at index 1
      console.log(bulan)
      // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

      months.splice(4, 1, 'May')
      // Replaces 1 element at index 4
      console.log(bulan)
      // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

      // 9. method slice
      const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
      console.log(animals.slice(2)) // menampilkan dari index ke 2
      // Expected output: Array ["camel", "duck", "elephant"]

      console.log(animals.slice(2, 4)) // menampilkan idex dari ke 2 sampi 4
      // Expected output: Array ["camel", "duck"]

      console.log(animals.slice(1, 5)) // menampilkan dari index ke 1 sampai ke
      // Expected output: Array ["bison", "camel", "duck", "elephant"]

      console.log(animals.slice(-2)) // -2 index atau 2 index dari paling belakan
      // Expected output: Array ["duck", "elephant"]

      console.log(animals.slice(2, -1)) // menampilkan dari index 2 sampi 1 index paling belakang
      // Expected output: Array ["camel", "duck"]

      console.log(animals.slice()) //sama seperti penampilkan array
      // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

      // 10. methodconst array1 = ['one', 'two', 'three'];
      console.log('array1:', array1)
      // Expected output: "array1:" Array ["one", "two", "three"]

      const reversed = array1.reverse()
      console.log('reversed:', reversed)
      // Expected output: "reversed:" Array ["three", "two", "one"]

      // Careful: reverse is destructive -- it changes the original array.
      console.log('array1:', array1)
      // Expected output: "array1:" Array ["three", "two", "one"] reverse

      // 11. method join ( memberikan pemisah antar element array)
      const elements = ['Fire', 'Air', 'Water']

      console.log(elements.join())
      // Expected output: "Fire,Air,Water"

      console.log(elements.join(''))
      // Expected output: "FireAirWater"

      console.log(elements.join('-'))
      // Expected output: "Fire-Air-Water"

//Mengubah Nilai Const Dengan Array
  const kumpulanWarna = ['merah', 'kuning', 'hijau']
  kumpulanWarna.push('biru')

// Array Multidimensi Atau Nested Array
  console.log('Array Multidimensi Atau Nested Array')
  const board = [
    [null, null, 'X'],
    ['X', 'O', 'X'],
    ['X', 'O', 'X']
  ]

  console.log([0], [2]) //akan mencetak x pada index ke 0 dan pada index 0, x berada index 2


  