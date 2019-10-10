// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.MediaDownloadParam
export interface MediaDownloadParam {
	SignatureUrl: string;
	FileName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.MediaDownloadParamList
export interface MediaDownloadParamList {
	MediaDownloadParam: MediaDownloadParam[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.DownloadAllTypeRecordingResponse
export interface DownloadAllTypeRecordingResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	MediaDownloadParamList: MediaDownloadParamList;
}

