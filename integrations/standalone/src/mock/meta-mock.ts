import { CallableStart, ConnectorRef, ErrorMeta, MappingInfo, NodeRef, RoleMeta } from '@axonivy/inscription-protocol';

export namespace MetaMock {
  const MAP_INFO_TYPES = {
    'workflow.humantask.ProcurementRequest': [
      {
        attribute: 'accepted',
        type: 'Boolean',
        simpleType: 'Boolean',
        description: ''
      },
      {
        attribute: 'activityLog',
        type: 'List<workflow.humantask.LogEntry>',
        simpleType: 'List<LogEntry>',
        description: ''
      },
      {
        attribute: 'amount',
        type: 'Number',
        simpleType: 'Number',
        description: ''
      },
      {
        attribute: 'dataOkManager',
        type: 'Boolean',
        simpleType: 'Boolean',
        description: ''
      },
      {
        attribute: 'dataOkTeamLeader',
        type: 'Boolean',
        simpleType: 'Boolean',
        description: ''
      },
      {
        attribute: 'description',
        type: 'String',
        simpleType: 'String',
        description: ''
      },
      {
        attribute: 'notes',
        type: 'String',
        simpleType: 'String',
        description: ''
      },
      {
        attribute: 'pricePerUnit',
        type: 'Number',
        simpleType: 'Number',
        description: ''
      },
      {
        attribute: 'requester',
        type: 'workflow.humantask.User',
        simpleType: 'User',
        description: ''
      },
      {
        attribute: 'totalPrice',
        type: 'Number',
        simpleType: 'Number',
        description: ''
      }
    ],
    'workflow.humantask.User': [
      {
        attribute: 'email',
        type: 'String',
        simpleType: 'String',
        description: ''
      },
      {
        attribute: 'fullName',
        type: 'String',
        simpleType: 'String',
        description: ''
      },
      {
        attribute: 'role',
        type: 'String',
        simpleType: 'String',
        description: ''
      }
    ]
  };

  export const OUT_MAP_INFO: MappingInfo = {
    variables: [
      {
        attribute: 'out',
        type: 'workflow.humantask.ProcurementRequest',
        simpleType: 'ProcurementRequest',
        description: ''
      }
    ],
    types: MAP_INFO_TYPES
  };

  export const RESULT_MAP_INFO: MappingInfo = {
    variables: [
      {
        attribute: 'result',
        type: '<>',
        simpleType: '<>',
        description: ''
      }
    ],
    types: {}
  };

  export const CALLABLE_STARTS: CallableStart[] = [
    {
      id: 'workflow.humantask.AcceptRequest:start(workflow.humantask.ProcurementRequest)',
      process: 'AcceptRequest',
      packageName: 'workflow.humantask',
      description: '',
      startName: 'start(workflow.humantask.ProcurementRequest)',
      project: 'workflow-demos',
      deprecated: false,
      callParameter: {
        variables: [
          {
            attribute: 'param.procurementRequest',
            type: 'workflow.humantask.ProcurementRequest',
            simpleType: 'ProcurementRequest',
            description: 'this is a description'
          }
        ],
        types: MAP_INFO_TYPES
      }
    },
    {
      id: 'workflow.humantask.AcceptRequest:start2()',
      process: 'AcceptRequest',
      startName: 'start2()',
      description: '',
      packageName: 'workflow.humantask',
      project: 'workflow-demos',
      deprecated: true,
      callParameter: {
        variables: [],
        types: {}
      }
    },
    {
      id: 'demo.test1:start()',
      process: 'test1',
      startName: 'start()',
      description: '',
      packageName: 'demo',
      project: 'demo',
      deprecated: false,
      callParameter: {
        variables: [
          {
            attribute: 'param.Endless',
            type: 'demo.Endless',
            simpleType: 'Endless',
            description: ''
          }
        ],
        types: {
          'demo.Endless': [
            {
              attribute: 'endless',
              type: 'demo.Endless',
              simpleType: 'Endless',
              description: ''
            }
          ]
        }
      }
    }
  ];

  export const ROLES: RoleMeta[] = [
    { id: 'Everybody', label: 'In this role is everyone' },
    { id: 'Employee', label: '' },
    { id: 'Teamleader', label: '' }
  ];

  export const EXPIRY_ERRORS: ErrorMeta[] = [
    { label: 'ProcurementRequestParallel -> error:task', id: 'f29' },
    { label: 'ProcurementRequestParallel -> error:task:bla', id: 'f31' }
  ];

  const NODE_OF: NodeRef = {
    pid: '1',
    name: 'Mock Element',
    type: {
      id: 'GenericActivity',
      label: 'Mock Element',
      shortLabel: 'Element',
      description: 'This is a mock element',
      iconId: 'mock icon',
      impl: ''
    }
  };

  export const CONNECTOR_OF: ConnectorRef = {
    pid: '169A4921D0EF0B91-f21',
    name: '',
    source: NODE_OF,
    target: NODE_OF
  };
}
