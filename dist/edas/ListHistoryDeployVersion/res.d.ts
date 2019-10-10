// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.PackageVersion
export interface PackageVersion {
	Id: string;
	PackageVersion: string;
	AppId: string;
	Description: string;
	WarUrl: string;
	CreateTime: number;
	UpdateTime: number;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.PackageVersionList
export interface PackageVersionList {
	PackageVersion: PackageVersion[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListHistoryDeployVersionResponse
export interface ListHistoryDeployVersionResponse {
	Code: number;
	Message: string;
	RequestId: string;
	PackageVersionList: PackageVersionList;
}

