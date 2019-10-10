// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.PreCreateMediaParam
export interface PreCreateMediaParam {
	OssFile: string;
	OssFilePath: string;
	OssBucket: string;
	SignatureUrl: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.PreCreateMediaResponse
export interface PreCreateMediaResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	PreCreateMediaParam: PreCreateMediaParam;
}

