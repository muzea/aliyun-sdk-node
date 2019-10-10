// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.FileSummary
export interface FileSummary {
	FileId: string;
	Name: string;
	Size: string;
	UtcCreatedOn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryDeviceFileList
export interface DataInQueryDeviceFileList {
	FileSummary: FileSummary[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryDeviceFileListResponse
export interface QueryDeviceFileListResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	CurrentPage: number;
	PageCount: number;
	PageSize: number;
	Total: number;
	Data: DataInQueryDeviceFileList;
}

