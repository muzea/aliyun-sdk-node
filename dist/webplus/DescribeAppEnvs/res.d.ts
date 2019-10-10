// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.AppEnv
export interface AppEnv {
	EnvId: string;
	EnvName: string;
	EnvDescription: string;
	CreateUsername: string;
	UpdateUsername: string;
	CreateTime: number;
	UpdateTime: number;
	StackId: string;
	StackName: string;
	AppName: string;
	AppId: string;
	ApplyingChange: boolean;
	AbortingChange: boolean;
	EnvType: string;
	PkgVersionId: string;
	PkgVersionLabel: string;
	EnvStatus: string;
	LastEnvStatus: string;
	StorageBase: string;
	DataRoot: string;
	LatestChangeId: string;
	ChangeBanner: string;
	CategoryName: string;
	TotalInstances: number;
	LogBase: string;
	PkgVersionStorageKey: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.AppEnvs
export interface AppEnvs {
	AppEnv: AppEnv[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DescribeAppEnvsResponse
export interface DescribeAppEnvsResponse {
	RequestId: string;
	Code: string;
	Message: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	AppEnvs: AppEnvs;
}

