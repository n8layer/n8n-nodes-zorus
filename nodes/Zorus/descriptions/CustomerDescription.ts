import type { INodeProperties } from 'n8n-workflow';

export const customerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'customer',
				],
			},
		},
		options: [
			{
				name: 'Search Customers',
				value: 'getMany',
				action: 'Search customers',
				routing: {
					request: {
						method: 'POST',
						url: '/customers/search',
						body: {
							page : '={{ $parameter.page }}',
							pageSize : '={{ $parameter.pageSize }}',
							sortProperty : '={{ $parameter.sortProperty }}',
							sortAscending : '={{ $parameter.sortAscending }}',
							nameContains : '={{ $parameter.nameContains }}',
							isEnabled : '={{ $parameter.isEnabled }}',
							uuidEquals : '={{ $parameter.uuidEquals }}',
							createdAfter : '={{ $parameter.createdAfter }}',
							createdBefore : '={{ $parameter.createdBefore }}',
						},
					},
				},
			},
			{
				name: 'Create Customer',
				value: 'create',
				action: 'Create customer',
				routing: {
					request: {
						method: 'POST',
						url: '/customers',
						body: {
							name : '={{ $parameter.name }}',
							basePolicyUuid : '={{ $parameter.basePolicyUuid }}',
						},
					},
				},
			},
		],
		default: 'getMany',
	},
];

export const customerFields: INodeProperties[] = [
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['getMany'],
			},
		},
		default: 1,
		description: 'The page number to return',
	},
	{
		displayName: 'Page Size',
		name: 'pageSize',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['getMany'],
			},
		},
		default: 10,
		description: 'The number of items to return per page',
	},
	{
		displayName: 'Sort Property',
		name: 'sortProperty',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['getMany'],
			},
		},
		default: '',
		description: 'The property to sort by',
	},
	{
		displayName: 'Sort Ascending',
		name: 'sortAscending',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['getMany'],
			},
		},
		default: true,
		description: 'Whether to sort in ascending order',
	},
	{
		displayName: 'Name Contains',
		name: 'nameContains',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['getMany'],
			},
		},
		default: '',
		description: 'The name to search for',
	},
	{
		displayName: 'Is Enabled',
		name: 'isEnabled',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['getMany'],
			},
		},
		default: true,
		description: 'Whether the customer is enabled',
	},
	{
		displayName: 'UUID Equals',
		name: 'uuidEquals',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['getMany'],
			},
		},
		default: '',
		description: 'The UUID to search for',
	},
	{
		displayName: 'Created After',
		name: 'createdAfter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['getMany'],
			},
		},
		default: '',
		description: 'The date to search for customers created after',
	},
	{
		displayName: 'Created Before',
		name: 'createdBefore',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['getMany'],
			},
		},
		default: '',
		description: 'The date to search for customers created before',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The name of the customer',
	},
	{
		displayName: 'Base Policy UUID',
		name: 'basePolicyUuid',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The base policy UUID to create the customer with',
	},
];
