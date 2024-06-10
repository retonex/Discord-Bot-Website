import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yolunu mu kaybettin dostum?',
        'Ah hayır, Burası çıkmaz yol!.',
        'Girişi ve çıkışı olmayana yönlendirilidiniz'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

