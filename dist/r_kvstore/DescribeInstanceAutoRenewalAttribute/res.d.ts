// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.Item
export interface Item {
	DBInstanceId: string;
	RegionId: string;
	Duration: number;
	Status: string;
	AutoRenew: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.ItemsInDescribeInstanceAutoRenewalAttribute
export interface ItemsInDescribeInstanceAutoRenewalAttribute {
	Item: Item[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeInstanceAutoRenewalAttributeResponse
export interface DescribeInstanceAutoRenewalAttributeResponse {
	RequestId: string;
	PageNumber: number;
	TotalRecordCount: number;
	PageRecordCount: number;
	Items: ItemsInDescribeInstanceAutoRenewalAttribute;
}

