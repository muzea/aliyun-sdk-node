// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.DeployGroupEntity
export interface DeployGroupEntity {
	Id: string;
	GroupName: string;
	GroupType: number;
	AppId: string;
	ClusterId: string;
	PackageVersionId: string;
	AppVersionId: string;
	CreateTime: number;
	UpdateTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.InsertDeployGroupResponse
export interface InsertDeployGroupResponse {
	Code: number;
	Message: string;
	RequestId: string;
	DeployGroupEntity: DeployGroupEntity;
}

