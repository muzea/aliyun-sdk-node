// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.StackTraceItem
export interface StackTraceItem {
	FileName: string;
	NativeMethod: boolean;
	MethodName: string;
	ClassName: string;
	LineNumber: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.DownloadLogResponse
export interface DownloadLogResponse {
	RequestId: string;
	Suppressed: string[];
	StackTrace: StackTraceItem[];
}

