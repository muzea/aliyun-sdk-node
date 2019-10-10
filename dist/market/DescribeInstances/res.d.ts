// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.InstanceItem
export interface InstanceItem {
	InstanceId: number;
	OrderId: number;
	SupplierName: string;
	ProductCode: string;
	ProductSkuCode: string;
	ProductName: string;
	ProductType: string;
	Status: string;
	BeganOn: number;
	EndOn: number;
	CreatedOn: number;
	ExtendJson: string;
	HostJson: string;
	AppJson: string;
	ApiJson: string;
	ImageJson: string;
	IdaasJson: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.InstanceItems
export interface InstanceItems {
	InstanceItem: InstanceItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.DescribeInstancesResponse
export interface DescribeInstancesResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	InstanceItems: InstanceItems;
}

