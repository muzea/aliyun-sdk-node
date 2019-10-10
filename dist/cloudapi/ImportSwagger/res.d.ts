// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiImportSwaggerSuccess
export interface ApiImportSwaggerSuccess {
	Path: string;
	HttpMethod: string;
	ApiUid: string;
	ApiOperation: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.Success
export interface Success {
	ApiImportSwaggerSuccess: ApiImportSwaggerSuccess[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiImportSwaggerFailed
export interface ApiImportSwaggerFailed {
	Path: string;
	HttpMethod: string;
	ErrorMsg: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.Failed
export interface Failed {
	ApiImportSwaggerFailed: ApiImportSwaggerFailed[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ImportSwaggerResponse
export interface ImportSwaggerResponse {
	RequestId: string;
	Success: Success;
	Failed: Failed;
}

