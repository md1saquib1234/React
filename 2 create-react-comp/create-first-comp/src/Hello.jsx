function Hello() {

  var myName = 'Saquib';
  let number = 456;
  let fullName = () => {
    return 'MD Saquib Ansari'
  }
  return <p>
    MessageNo: {number} I am your master {fullName()}
  </p>
}

export default Hello;