import { useQueryData } from './useQueryData';
import { QueryData } from '@axonivy/inscription-protocol';
import { DatabaseSelect } from './database/DatabaseSelect';
import { QueryKindSelect } from './database/QueryKindSelect';
import { PartProps, usePartDirty, usePartState } from '../../../components/editors';
import { PathContext, useValidations } from '../../../context';
import { QueryRead } from './db-query/QueryRead';
import { QueryWrite } from './db-query/QueryWrite';
import { QueryUpdate } from './db-query/QueryUpdate';
import { QueryDelete } from './db-query/QueryDelete';
import { QueryAny } from './db-query/QueryAny';
import { DbExceptionHandler } from './database/DbExceptionHandler';

export function useQueryPart(): PartProps {
  const { config, defaultConfig, initConfig, reset } = useQueryData();
  const validations = useValidations(['query']);
  const compareData = (data: QueryData) => [data];
  const state = usePartState(compareData(defaultConfig), compareData(config), validations);
  const dirty = usePartDirty(compareData(initConfig), compareData(config));
  return { name: 'Query', state: state, reset: { dirty, action: () => reset() }, content: <QueryPart /> };
}

const QueryPart = () => {
  const query = useQuery();
  return (
    <>
      <PathContext path='query'>
        <QueryKindSelect />
        <DatabaseSelect />
        {query}
      </PathContext>
      <DbExceptionHandler />
    </>
  );
};

const useQuery = () => {
  const { config } = useQueryData();
  switch (config.query.sql.kind) {
    case 'READ':
      return <QueryRead />;
    case 'WRITE':
      return <QueryWrite />;
    case 'UPDATE':
      return <QueryUpdate />;
    case 'DELETE':
      return <QueryDelete />;
    case 'ANY':
      return <QueryAny />;
  }
};
