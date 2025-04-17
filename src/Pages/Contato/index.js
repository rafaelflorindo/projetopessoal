import { useState } from 'react';
import './style.css'

const Contatos = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [dadosEnviar, setDadosEnviar] = useState('');

    const enviarFormulario = (e) => {
        e.preventDefault();

        const dados = { nome, email, mensagem };
        setDadosEnviar(dados)
        // Aqui você poderá enviar para a API futuramente:
        console.log('Enviando dados...', dados);

        // Exemplo com fetch:
        /*
        fetch('https://sua-api.com/contato', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dados)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
        */

        // Limpar campos após envio
        setNome('');
        setEmail('');
        setMensagem('');
    };

    return (
        <div className="pagina">
            <h2>Contato</h2>
            <form onSubmit={enviarFormulario}>
                <div>
                    <label>Nome:</label><br />
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label><br />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Mensagem:</label><br />
                    <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} required />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <button type="submit">Enviar</button>
                </div>

                {dadosEnviar && (
                    <div style={{ marginTop: '20px' }}>
                        <h4>Dados enviados:</h4>
                        <p><strong>Nome:</strong> {dadosEnviar.nome}</p>
                        <p><strong>Email:</strong> {dadosEnviar.email}</p>
                        <p><strong>Mensagem:</strong> {dadosEnviar.mensagem}</p>
                    </div>
                )}
            </form>

        </div>
    );
};

export default Contatos;