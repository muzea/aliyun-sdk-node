// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.LogFile
export interface LogFile {
	FileID: string;
	LogStatus: string;
	LogDownloadURL: string;
	LogSize: string;
	LogStartTime: string;
	LogEndTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeSQLLogFiles
export interface ItemsInDescribeSQLLogFiles {
	LogFile: LogFile[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeSQLLogFilesResponse
export interface DescribeSQLLogFilesResponse {
	RequestId: string;
	TotalRecordCount: number;
	PageNumber: number;
	PageRecordCount: number;
	Items: ItemsInDescribeSQLLogFiles;
}

