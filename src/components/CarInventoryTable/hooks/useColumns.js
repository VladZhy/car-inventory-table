import { ActionsDropdown } from '../subcomponents';

const useColumns = () => {
  const getColumns = (cars, setCars) => [
    {
      Header: ' ',
      Cell: ({ row }) => {
        return row.index + 1;
      }
    },
    {
      Header: 'Company',
      accessor: 'car'
    },
    {
      Header: 'Model',
      accessor: 'car_model',
    },
    {
      Header: 'VIN',
      accessor: 'car_vin',
    },
    {
      Header: 'Color',
      accessor: 'car_color',
    },
    {
      Header: 'Year',
      accessor: 'car_model_year',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
    {
      Header: 'Availability',
      accessor: 'availability',
      Cell: ({ value }) => {
        return value ? "In stock" : "Out of stock";
      }
    },
    {
      Header: 'Actions',
      Cell: ({ row }) => {
        return <ActionsDropdown car={row.original} cars={cars} setCars={setCars} />;
      }
    }
  ];

  return { getColumns };
}

export default useColumns;