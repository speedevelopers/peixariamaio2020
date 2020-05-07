import React from 'react';

const UserTable = props => (

    <table className="responsive-table">
       <thead>                                              {/*Cabeçalho*/} 
            <tr>
                <th>Nome</th>
                <th>Usuários</th>
                <th>Ações</th>                
            </tr>
        </thead>
                                                            {/*FIM do cabeçalho */}
        <tbody>
            {
                props.users.length > 0 ? (                  
                    props.users.map(user => (

                        <tr key={user.id}>                  {/*Dados*/}
                            <td>{user.name}</td>
                            <td>{user.username}</td>

                            
                            <td className="left-align">
                                <button
                                    className="waves-effect waves-light btn-small"
                                    onClick={() => props.editRow(user)}>
                                    Editar
                                </button>

                                <button
                                    className="waves-effect waves-light btn-small red darken-4"
                                    onClick={() => props.deleteUser(user.id)}>
                                    Excluir
                            </button>
                            </td> 
                                                     {/*FIM dos dados*/}
                        </tr>                               
                                                    
                    ))
                ) : (
                        <tr>                                                                                    {/*Se não houver ninguém cadastrado*/}
                            <td colSpan={3}>{props.users[0]} Sem Usuários.</td>
                        </tr>
                    )
            }
        </tbody>
    </table>
);

export default UserTable;

