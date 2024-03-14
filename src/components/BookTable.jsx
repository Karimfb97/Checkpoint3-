export default function BookTable({onDelete,books}){
        return (
            <table>
                <thead>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Año</th>
                </thead>
                <tbody>
                    {books.map((book)=>(
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.year}</td>
                        </tr>
                    ))
                        
                    
                    }




                </tbody>
            </table>



        )






}