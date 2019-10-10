// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ValueItem
export interface ValueItem {
	Value: string;
	ExpiredTime: string;
	ZoneId: string;
	InstanceChargeType: string;
	InstanceType: string;
	Count: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AttributeValues
export interface AttributeValues {
	ValueItem: ValueItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AccountAttributeItem
export interface AccountAttributeItem {
	AttributeName: string;
	AttributeValues: AttributeValues;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AccountAttributeItems
export interface AccountAttributeItems {
	AccountAttributeItem: AccountAttributeItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeAccountAttributesResponse
export interface DescribeAccountAttributesResponse {
	RequestId: string;
	AccountAttributeItems: AccountAttributeItems;
}

