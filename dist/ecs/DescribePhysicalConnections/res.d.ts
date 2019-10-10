// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.PhysicalConnectionType
export interface PhysicalConnectionType {
	PhysicalConnectionId: string;
	AccessPointId: string;
	Type: string;
	Status: string;
	BusinessStatus: string;
	CreationTime: string;
	EnabledTime: string;
	LineOperator: string;
	Spec: string;
	PeerLocation: string;
	PortType: string;
	RedundantPhysicalConnectionId: string;
	Name: string;
	Description: string;
	AdLocation: string;
	PortNumber: string;
	CircuitCode: string;
	Bandwidth: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.PhysicalConnectionSet
export interface PhysicalConnectionSet {
	PhysicalConnectionType: PhysicalConnectionType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribePhysicalConnectionsResponse
export interface DescribePhysicalConnectionsResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	PhysicalConnectionSet: PhysicalConnectionSet;
}

