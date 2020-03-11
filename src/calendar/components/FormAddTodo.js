// @flow
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, memo } from 'react';
import Input from 'components/Input';
import { Button } from 'react-bootstrap';
import { getIndexFirstCharacter } from 'utils/helpers';

type Props = {
  addTodo: Function,
  container: Object,
  handleCloseModal: Function
};

const FormAddTodo = ({ addTodo, container, handleCloseModal }: Props) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleChangeInput = (e, name) => {
    const { value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'quantity':
        setQuantity(value);
        break;
      default:
        break;
    }
  };

  const handleRenderInfo = () => {
    let information = [];
    const firstNameCharacter = name.charAt(0);
    const index = getIndexFirstCharacter(firstNameCharacter);

    for (let i = 0; i < quantity; i++) {
      information.push(`${index + i}${index - i < 10 ? 0 : ''} 1b x ${index}`);
    }
    return information;
  };

  const handleSubmit = () => {
    const info = handleRenderInfo();
    addTodo(container, {
      name,
      quantity,
      info
    });
    handleCloseModal();
  };

  return (
    <div className="auth-form-light text-left py-5 px-4 px-sm-5">
      <form className="pt-3">
        <div className="form-group">
          <Input
            type="text"
            className="form-control form-control-lg"
            placeholder="name"
            onChange={e => handleChangeInput(e, 'name')}
          />
        </div>
        <div className="form-group">
          <Input
            type="number"
            className="form-control form-control-lg"
            placeholder="0"
            onChange={e => handleChangeInput(e, 'quantity')}
          />
        </div>
        <div className="mt-3">
          <Button variant="primary" className="w-100" onClick={handleSubmit}>
            ADD
          </Button>
        </div>
      </form>
    </div>
  );
};

export default memo<Props>(FormAddTodo);
