// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.PurchasedApiGroupAttribute
export interface PurchasedApiGroupAttribute {
	GroupId: string;
	GroupName: string;
	Description: string;
	PurchasedTime: string;
	ExpireTime: string;
	RegionId: string;
	BillingType: string;
	InvokeTimesMax: number;
	InvokeTimesNow: number;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.PurchasedApiGroupAttributes
export interface PurchasedApiGroupAttributes {
	PurchasedApiGroupAttribute: PurchasedApiGroupAttribute[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribePurchasedApiGroupsResponse
export interface DescribePurchasedApiGroupsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	PurchasedApiGroupAttributes: PurchasedApiGroupAttributes;
}

