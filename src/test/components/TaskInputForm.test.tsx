import { render } from '@testing-library/react';
import React from 'react';
import TaskInputForm from '../../components/TaskInputForm';
import { TaskInputFormProps } from '../../types/taskinputform';

describe('Task component', () => {
  it('matches snapshot', () => {
    const dummyProps: TaskInputFormProps = {
      user: {
        id: 'id',
        app_metadata: {
          provider: 'email',
        },
        user_metadata: {},
        aud: 'aud',
        created_at: '2021-11-01',
      },
      name: '型定義を追加する',
      addTodoHandler: jest.fn(),
    };
    const { asFragment } = render(<TaskInputForm {...dummyProps} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
