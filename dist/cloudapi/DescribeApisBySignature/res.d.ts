// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiInfo
export interface ApiInfo {
	ApiId: string;
	RegionId: string;
	BoundTime: string;
	GroupName: string;
	GroupId: string;
	ApiName: string;
	StageName: string;
	Description: string;
	Visibility: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiInfosInDescribeApisBySignature
export interface ApiInfosInDescribeApisBySignature {
	ApiInfo: ApiInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApisBySignatureResponse
export interface DescribeApisBySignatureResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	ApiInfos: ApiInfosInDescribeApisBySignature;
}

