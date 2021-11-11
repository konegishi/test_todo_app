import { render } from '@testing-library/react';
import React from 'react';
import Task from '../../components/Task';
import { TaskProps } from '../../types/task';

describe('Task component', () => {
  it('matches snapshot', () => {
    const dummyProps: TaskProps = {
      title: '型定義を追加する',
      id: 10,
      description: 'types以下に配置する',
      isComplete: false,
      deleteTodoHandler: jest.fn(),
      updateTodoHandler: jest.fn(),
    };
    const { asFragment } = render(<Task {...dummyProps} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
