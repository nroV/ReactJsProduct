import React from 'react'

export default function Body() {
    return (
        <div >

            <main className='my-5'>
                <div className='wear'>
                    <p>Wear the Best.</p>
                </div>

                <div className='content'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facilis, voluptatibus omnis corrupti non in expedita laboriosam quis molestiae, ipsum nulla sint similique porro, deleniti culpa quisquam repudiandae doloribus dolore.
                    </p>
                </div>

                <panel>
                    <div>
                        <p>Shop Now</p>
                        <span class="material-symbols-outlined">
                            open_in_full
                        </span>

                    </div>

                    <div>
                        <p>See Promo</p>
                        <span class="material-symbols-outlined">
                            open_in_full
                        </span>

                    </div>
                
                </panel>

            </main>

            <section className='my-5'>
                <div className='tall'>
                      <h1>STREET STYLE</h1>
                      <div className="box"></div>
                    <img  alt='img-one  ' src='https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
       
                </div>
                <div className='short'>
                <h1>CASUAL STYLE</h1>
                <div className="box"></div>
                    <img  alt='img-one  ' src='https://images.unsplash.com/photo-1618554754947-e01d5ce3c549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
                
                </div>
                <div className='short'>
                <h1>FORMAL STYLE</h1>
                <div className="box"></div>
                    <img  alt='img-one  ' src='https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'/>
                  
                </div>
                
            
            </section>

        </div>
    )
}
