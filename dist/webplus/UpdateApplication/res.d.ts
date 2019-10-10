// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.Application
export interface Application {
	AppDescription: string;
	AppId: string;
	CategoryName: string;
	UpdateUsername: string;
	UpdateTime: number;
	CreateUsername: string;
	CreateTime: number;
	AppName: string;
	TotalEnvs: number;
	TerminatedEnvs: number;
	RunningEnvs: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.UpdateApplicationResponse
export interface UpdateApplicationResponse {
	RequestId: string;
	Code: string;
	Message: string;
	Application: Application;
}

