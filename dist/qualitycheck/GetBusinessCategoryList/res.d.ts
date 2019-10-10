// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.BusinessCategoryBasicInfo
export interface BusinessCategoryBasicInfo {
	BusinessName: string;
	Bid: number;
	ServiceType: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInGetBusinessCategoryList
export interface DataInGetBusinessCategoryList {
	BusinessCategoryBasicInfo: BusinessCategoryBasicInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.GetBusinessCategoryListResponse
export interface GetBusinessCategoryListResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInGetBusinessCategoryList;
}

