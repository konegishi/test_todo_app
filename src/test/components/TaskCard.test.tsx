import { render } from '@testing-library/react';
import React from 'react';
import TaskCard from '../../components/TaskCard';
import { TaskCardProps } from '../../types/taskcard';

describe('TaskCard component', () => {
  it('matches snapshot', () => {
    const dummyProps: TaskCardProps = {
      todos: [
        {
          task: '型定義を追加する',
          id: 10,
          description: 'types以下に配置する',
          isComplete: false,
        },
        {
          task: '型定義を追加する2',
          id: 11,
          description: 'types以下に配置する2',
          isComplete: false,
        },
      ],
      deleteTodoHandler: jest.fn(),
      updateTodoHandler: jest.fn(),
    };
    const { asFragment } = render(<TaskCard {...dummyProps} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
