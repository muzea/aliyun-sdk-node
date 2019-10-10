// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.Address
export interface Address {
	ConnectionString: string;
	IPAddress: string;
	NetType: string;
	Port: string;
	VPCId: string;
	VSwitchId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DBEndpoint
export interface DBEndpoint {
	DBEndpointId: string;
	EndpointType: string;
	Nodes: string;
	ReadWriteMode: string;
	AutoAddNewNodes: string;
	EndpointConfig: string;
	AddressItems: Address[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DescribeDBClusterEndpointsResponse
export interface DescribeDBClusterEndpointsResponse {
	RequestId: string;
	Items: DBEndpoint[];
}

