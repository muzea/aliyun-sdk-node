// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.AuthorizedApi
export interface AuthorizedApi {
	RegionId: string;
	GroupId: string;
	GroupName: string;
	StageName: string;
	Operator: string;
	ApiId: string;
	ApiName: string;
	AuthorizationSource: string;
	Description: string;
	AuthorizedTime: string;
	AuthVaildTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.AuthorizedApis
export interface AuthorizedApis {
	AuthorizedApi: AuthorizedApi[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeAuthorizedApisResponse
export interface DescribeAuthorizedApisResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	AuthorizedApis: AuthorizedApis;
}

