// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.MediaUploadParam
export interface MediaUploadParam {
	Name: string;
	Id: string;
	Instance: string;
	FileName: string;
	OssFileName: string;
	OssFilePath: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.CreateMediaResponse
export interface CreateMediaResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	MediaUploadParam: MediaUploadParam;
}

