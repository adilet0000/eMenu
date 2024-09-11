import { useParams } from 'react-router-dom';

const MenuPageTable = () => {
  const { tableId } = useParams(); // номер столика
  return <div>Menu for table {tableId}</div>;
};

export function MenuPage() {
   return (
      <>

      </>
   )
}