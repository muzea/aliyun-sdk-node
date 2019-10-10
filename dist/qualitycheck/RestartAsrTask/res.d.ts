// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RestartResult
export interface RestartResult {
	Success: boolean;
	Data: string;
	Message: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInRestartAsrTask
export interface DataInRestartAsrTask {
	RestartResult: RestartResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RestartAsrTaskResponse
export interface RestartAsrTaskResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInRestartAsrTask;
}

