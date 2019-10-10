// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cas.Order
export interface Order {
	Id: number;
	InstanceId: string;
	Source: string;
	Status: string;
	CertType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cas.DescribeOrderInstanceListResponse
export interface DescribeOrderInstanceListResponse {
	RequestId: string;
	TotalCount: number;
	OrderList: Order[];
}

