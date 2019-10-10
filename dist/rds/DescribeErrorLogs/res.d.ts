// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ErrorLog
export interface ErrorLog {
	ErrorInfo: string;
	CreateTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeErrorLogs
export interface ItemsInDescribeErrorLogs {
	ErrorLog: ErrorLog[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeErrorLogsResponse
export interface DescribeErrorLogsResponse {
	RequestId: string;
	TotalRecordCount: number;
	PageNumber: number;
	PageRecordCount: number;
	Items: ItemsInDescribeErrorLogs;
}

