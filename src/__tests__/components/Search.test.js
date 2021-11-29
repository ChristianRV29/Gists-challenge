import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Search } from './../../components/molecules/Search';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
 ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Test with <Search /> component',  () => {
    test('Shoul render the component', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/', '/gists/mygist']}>
                <Search />
            </MemoryRouter> 
        );
        expect(wrapper).toMatchInlineSnapshot();
        expect(wrapper).find('.input-group').text().trim().toBe('Search');
    });
});