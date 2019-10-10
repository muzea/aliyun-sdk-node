// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.CustomerGateway
export interface CustomerGateway {
	CustomerGatewayId: string;
	Name: string;
	IpAddress: string;
	Description: string;
	CreateTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.CustomerGateways
export interface CustomerGateways {
	CustomerGateway: CustomerGateway[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeCustomerGatewaysResponse
export interface DescribeCustomerGatewaysResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	CustomerGateways: CustomerGateways;
}

