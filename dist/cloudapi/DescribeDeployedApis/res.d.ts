// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DeployedApiItem
export interface DeployedApiItem {
	RegionId: string;
	ApiId: string;
	ApiName: string;
	GroupId: string;
	GroupName: string;
	StageName: string;
	Visibility: string;
	Description: string;
	DeployedTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DeployedApis
export interface DeployedApis {
	DeployedApiItem: DeployedApiItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeDeployedApisResponse
export interface DescribeDeployedApisResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	DeployedApis: DeployedApis;
}

