import './styles/global.scss';
import { RepositoryList } from './components/RepositoryList';
import { Counter } from './components/Counter';

export function App() {
    // throw new Error('Erro Erro Erro Erro');

    return(
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}