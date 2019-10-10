// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.ResultInAttachDataset
export interface ResultInAttachDataset {
	InstanceId: string;
	VersionId: string;
	State: string;
	GmtCreate: number;
	GmtModified: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.AttachDatasetResponse
export interface AttachDatasetResponse {
	RequestId: string;
	Code: string;
	Message: string;
	Result: ResultInAttachDataset;
}

