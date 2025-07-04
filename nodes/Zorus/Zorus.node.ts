import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

import { customerOperations, customerFields } from './descriptions/CustomerDescription';

export class Zorus implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Sherweb',
		name: 'sherweb',
		icon: 'file:Sherweb.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Sherweb API',
		defaults: {
			name: 'Sherweb',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'sherwebOAuth2Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://developer.zorustech.com/api',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Zorus-Api-Version': '1.0',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Deployment Token',
						value: 'deploymentToken',
					},
					{
						name: 'Endpoint',
						value: 'endpoint',
					},
					{
						name: 'Group',
						value: 'group',
					},
					{
						name: 'Policy',
						value: 'policy',
					},
					{
						name: 'Unblock Request',
						value: 'unblockRequest',
					},
				],
				default: 'customer',
			},
			// Operation
			...customerOperations,
			...customerFields,
		],
	};
}
