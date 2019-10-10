// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.DownloadParams
export interface DownloadParams {
	SignatureUrl: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.GetJobTemplateDownloadParamsResponse
export interface GetJobTemplateDownloadParamsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	DownloadParams: DownloadParams;
}

