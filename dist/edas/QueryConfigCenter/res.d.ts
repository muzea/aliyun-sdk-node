// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ConfigCenterInfo
export interface ConfigCenterInfo {
	Content: string;
	DataId: string;
	Group: string;
	Id: string;
	AppName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.QueryConfigCenterResponse
export interface QueryConfigCenterResponse {
	Code: number;
	Message: string;
	RequestId: string;
	configCenterInfo: ConfigCenterInfo;
}

