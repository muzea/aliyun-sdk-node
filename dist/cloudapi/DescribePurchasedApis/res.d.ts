// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.PurchasedApi
export interface PurchasedApi {
	RegionId: string;
	GroupId: string;
	GroupName: string;
	ApiId: string;
	ApiName: string;
	StageName: string;
	Description: string;
	PurchasedTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.PurchasedApis
export interface PurchasedApis {
	PurchasedApi: PurchasedApi[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribePurchasedApisResponse
export interface DescribePurchasedApisResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	PurchasedApis: PurchasedApis;
}

