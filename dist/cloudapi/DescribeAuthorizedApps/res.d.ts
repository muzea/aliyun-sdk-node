// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.AuthorizedApp
export interface AuthorizedApp {
	StageName: string;
	AppId: number;
	AppName: string;
	Operator: string;
	AuthorizationSource: string;
	Description: string;
	AuthorizedTime: string;
	AuthVaildTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.AuthorizedApps
export interface AuthorizedApps {
	AuthorizedApp: AuthorizedApp[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeAuthorizedAppsResponse
export interface DescribeAuthorizedAppsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	AuthorizedApps: AuthorizedApps;
}

