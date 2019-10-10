// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.DeployGroup
export interface DeployGroup {
	GroupId: string;
	GroupName: string;
	AppId: string;
	PackageVersionId: string;
	AppVersionId: string;
	GroupType: number;
	ClusterId: string;
	CreateTime: number;
	UpdateTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.DeployGroupList
export interface DeployGroupList {
	DeployGroup: DeployGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListDeployGroupResponse
export interface ListDeployGroupResponse {
	Code: number;
	Message: string;
	RequestId: string;
	DeployGroupList: DeployGroupList;
}

