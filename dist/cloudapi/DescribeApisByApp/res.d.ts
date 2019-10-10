// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.AppApiRelationInfo
export interface AppApiRelationInfo {
	RegionId: string;
	GroupId: string;
	GroupName: string;
	StageName: string;
	Operator: string;
	ApiId: string;
	ApiName: string;
	AuthorizationSource: string;
	Description: string;
	CreatedTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.AppApiRelationInfos
export interface AppApiRelationInfos {
	AppApiRelationInfo: AppApiRelationInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApisByAppResponse
export interface DescribeApisByAppResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	AppApiRelationInfos: AppApiRelationInfos;
}

