// @flow
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, memo } from 'react';
import Input from 'components/Input';
import { Button } from 'react-bootstrap';

type Props = {
  addContainer: Function,
  dateClicking: number,
  handleCloseModal: Function
};

const FormAddTodo = ({
  addContainer,
  dateClicking,
  handleCloseModal
}: Props) => {
  const [name, setName] = useState('');

  const handleChangeInput = (e, name) => {
    const { value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = () => {
    addContainer({
      date: dateClicking,
      name
    });
    handleCloseModal();
  };

  return (
    <div className="auth-form-light text-left py-2 px-4 px-sm-5">
      <form>
        <div className="form-group">
          <Input
            type="text"
            className="form-control form-control-lg"
            placeholder="Group Todo Name"
            onChange={e => handleChangeInput(e, 'name')}
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
