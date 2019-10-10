// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.PreModifyMediaParam
export interface PreModifyMediaParam {
	OssFile: string;
	OssFilePath: string;
	OssBucket: string;
	SignatureUrl: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.PreModifyMediaResponse
export interface PreModifyMediaResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	PreModifyMediaParam: PreModifyMediaParam;
}

