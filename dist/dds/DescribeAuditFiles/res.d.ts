// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.LogFile
export interface LogFile {
	FileID: number;
	LogStatus: string;
	LogStartTime: string;
	LogEndTime: string;
	LogDownloadURL: string;
	LogSize: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.ItemsInDescribeAuditFiles
export interface ItemsInDescribeAuditFiles {
	LogFile: LogFile[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeAuditFilesResponse
export interface DescribeAuditFilesResponse {
	RequestId: string;
	TotalRecordCount: number;
	PageNumber: number;
	PageRecordCount: number;
	DBInstanceId: string;
	Items: ItemsInDescribeAuditFiles;
}

