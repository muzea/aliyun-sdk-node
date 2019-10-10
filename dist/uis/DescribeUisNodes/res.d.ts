// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.UisNode
export interface UisNode {
	UisId: string;
	UisNodeId: string;
	UisNodeBandwidth: number;
	UisNodeAreaId: string;
	Description: string;
	Name: string;
	Status: string;
	IpAddrsNum: number;
	UisNodeIps: string;
	UisNodeActiveIp: string;
	CreateTime: number;
	UisEniIps: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.UisNodeList
export interface UisNodeList {
	UisNode: UisNode[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.DescribeUisNodesResponse
export interface DescribeUisNodesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	UisNodeList: UisNodeList;
}

