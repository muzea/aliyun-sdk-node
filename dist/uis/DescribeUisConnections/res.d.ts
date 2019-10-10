// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.UisConnection
export interface UisConnection {
	UisId: string;
	UisNodeId: string;
	UisConnectionId: string;
	Description: string;
	Name: string;
	State: string;
	UisProtocol: string;
	GreConfig: string;
	SslConfig: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.UisConnections
export interface UisConnections {
	UisConnection: UisConnection[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.DescribeUisConnectionsResponse
export interface DescribeUisConnectionsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	UisConnections: UisConnections;
}

