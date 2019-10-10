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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.CreatePkgVersionResponse
export interface CreatePkgVersionResponse {
	RequestId: string;
	Code: string;
	Message: string;
	PkgVersion: PkgVersion;
}

