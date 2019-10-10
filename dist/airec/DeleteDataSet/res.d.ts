// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.ResultInDeleteDataSet
export interface ResultInDeleteDataSet {
	InstanceId: string;
	VersionId: string;
	State: string;
	GmtCreate: number;
	GmtModified: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.DeleteDataSetResponse
export interface DeleteDataSetResponse {
	RequestId: string;
	Code: string;
	Message: string;
	Result: ResultInDeleteDataSet;
}

