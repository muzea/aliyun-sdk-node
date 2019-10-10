// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.PkgVersion
export interface PkgVersion {
	PkgVersionLabel: string;
	PkgVersionDescription: string;
	AppId: string;
	PkgVersionId: string;
	PackageSource: string;
	UpdateTime: number;
	CreateUsername: string;
	CreateTime: number;
	AppName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.PkgVersions
export interface PkgVersions {
	PkgVersion: PkgVersion[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DescribePkgVersionsResponse
export interface DescribePkgVersionsResponse {
	RequestId: string;
	Code: string;
	Message: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	PkgVersions: PkgVersions;
}

