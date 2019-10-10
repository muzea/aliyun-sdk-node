// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.LogInfo
export interface LogInfo {
	RegionId: string;
	SlsProject: string;
	SlsLogStore: string;
	LogType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.LogInfos
export interface LogInfos {
	LogInfo: LogInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeLogConfigResponse
export interface DescribeLogConfigResponse {
	RequestId: string;
	LogInfos: LogInfos;
}

