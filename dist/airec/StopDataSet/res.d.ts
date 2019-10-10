// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.ResultInStopDataSet
export interface ResultInStopDataSet {
	InstanceId: string;
	VersionId: string;
	State: string;
	GmtCreate: number;
	GmtModified: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.StopDataSetResponse
export interface StopDataSetResponse {
	RequestId: string;
	Code: string;
	Message: string;
	Result: ResultInStopDataSet;
}

