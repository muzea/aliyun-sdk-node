// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Item
export interface Item {
	DbInstanceId: string;
	RegionId: string;
	Duration: string;
	AutoRenew: string;
	DBInstanceType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.ItemsInDescribeInstanceAutoRenewalAttribute
export interface ItemsInDescribeInstanceAutoRenewalAttribute {
	Item: Item[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeInstanceAutoRenewalAttributeResponse
export interface DescribeInstanceAutoRenewalAttributeResponse {
	RequestId: string;
	PageNumber: number;
	PageRecordCount: number;
	ItemsNumbers: number;
	Items: ItemsInDescribeInstanceAutoRenewalAttribute;
}

