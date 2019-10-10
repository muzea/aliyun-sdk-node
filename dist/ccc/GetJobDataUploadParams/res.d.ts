// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.UploadParams
export interface UploadParams {
	AccessId: string;
	Policy: string;
	Signature: string;
	Folder: string;
	Host: string;
	Expire: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.GetJobDataUploadParamsResponse
export interface GetJobDataUploadParamsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	UploadParams: UploadParams;
}

