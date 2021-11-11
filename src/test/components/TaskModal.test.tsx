import { render } from '@testing-library/react';
import React from 'react';
import TaskModal from '../../components/TaskModal';
import { TaskModalProps } from '../../types/taskmodal';

describe('TaskModal component', () => {
  it('matches snapshot', () => {
    const dummyProps: TaskModalProps = {
      title: '型定義を追加する',
      id: 10,
      description: 'types以下に配置する',
      onClickHandler: jest.fn(),
      deleteTodoHandler: jest.fn(),
      updateTodoHandler: jest.fn(),
    };
    const { asFragment } = render(<TaskModal {...dummyProps} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
