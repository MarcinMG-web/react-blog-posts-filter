import { useAppState } from '../context/AppState';
import useAuthors from '../hooks/useAuthors';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

export default function AuthorFilter(): JSX.Element {
  const { authors } = useAuthors();
  const { dispatch } = useAppState();

  const handleOnChange = (_, value: number | string) => dispatch({ type: 'SET_SELECTED_AUTHOR', payload: value });

  return (
    <Select
      onChange={(_, value) => handleOnChange(_, value as number | string)}
      placeholder='All Authors'
      defaultValue=''
    >
      <Option value=''>All Authors</Option>
      {authors.map(({ id, name }) => (
        <Option key={id} value={id}>
          {name}
        </Option>
      ))}
    </Select>
  );
}
