// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SQLRecord
export interface SQLRecord {
	DBName: string;
	AccountName: string;
	HostAddress: string;
	SQLText: string;
	TotalExecutionTimes: number;
	ReturnRowCounts: number;
	ExecuteTime: string;
	ThreadID: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeSQLLogRecords
export interface ItemsInDescribeSQLLogRecords {
	SQLRecord: SQLRecord[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeSQLLogRecordsResponse
export interface DescribeSQLLogRecordsResponse {
	RequestId: string;
	TotalRecordCount: number;
	PageNumber: number;
	PageRecordCount: number;
	Items: ItemsInDescribeSQLLogRecords;
}

