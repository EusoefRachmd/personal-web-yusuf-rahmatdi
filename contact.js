
let namaKamu = "Haris Ganteng"
// let umurKamu = 15

// console.log(namaKamu)
// console.log(umurKamu)

// function showText () {
//     console.log("rico ganteng")
// }

// showText ()

// function showName() {
//     console.log(namaKamu + "tapi boong")
// }

// showName ()

// let yourAge = 45

// function showNameAndAge(nama) {
//     console.log("Nama:" + Nama +", Umur:" + age)
// }

// showNameAndAge("Mutia")

function submitForm(){
    // console.log("Tombol di tekan")
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phoneNumber = document.getElementById('input-PhoneNumber').value
    let subject = document.getElementById('input-subject').value
    let yourMassage = document.getElementById('input-YourMassage').value

    console.log(name)
    console.log(email)
    console.log(phoneNumber)
    console.log(subject)
    console.log(yourMassage)

    if( name == '') {
        alert('Nama Harus Diisi Boss')
    } else if (email ==''){
        alert('Email Harus Diisi Boss')
    } else if(phoneNumber == ''){
        alert('Nomor Harus Diisi Boss')
    } else if(subject ==''){
        alert('Subject Harus Diisi Boss')
    } else if(yourMassage == ''){
        alert('Pesan Harus Diisi Boss')
    }

    let receiverMail = 'jokowi@mail.com'

    let a = document.createElement('a');

    a.href = 'mailto:' + receiverMail + '?subject=' + subject + '&body=Halo nama saya ' + name + ', ' + yourMassage

    a.click()


    // let receiverMail = 'yusuf.rahmatdi@gmail.com'

    // let a = document.createElement('a')

    // a.href = 'mailto:' + receiverMail + '?subject=' + subject + '&body=Halo Nama Saya' + name + ',' + yourMassage

    // a.click()



    // if( email == '') {
    //     alert('Email Harus Diisi Boss')
    // }

    // if( phoneNumber == '') {
    //     alert('Nomor Harus Diisi Boss')
    // }

    // if( subject == '') {
    //     alert('Subject Harus Diisi Boss')
    // }

    // if( yourMassage == '') {
    //     alert('Pesan Harus Diisi Boss')
    // }
}

