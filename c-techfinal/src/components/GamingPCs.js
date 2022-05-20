import PCCARD from "./PCCard"

const GamingPCS=()=> {
  return(
    <main className='main custom-pcs'>
    <section className='best selling pcs'>
        <img src='media/pc-img.png' className='img-fluid pc-img' />
    </section>
    <section className='main-gaming-pcs container'>
        <h2 className='pc-header'>Custom PCS</h2>
        <div className='row'> <PCCARD/></div>
    </section>
</main> 
  )
}


export default GamingPCS