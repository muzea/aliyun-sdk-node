// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.MediaDownloadParam
export interface MediaDownloadParam {
	SignatureUrl: string;
	FileName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.DownloadCabRecordingResponse
export interface DownloadCabRecordingResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	MediaDownloadParam: MediaDownloadParam;
}

