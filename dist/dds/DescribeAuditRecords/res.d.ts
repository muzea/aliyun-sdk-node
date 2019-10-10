// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.SQLRecord
export interface SQLRecord {
	DBName: string;
	AccountName: string;
	HostAddress: string;
	Syntax: string;
	TotalExecutionTimes: number;
	ReturnRowCounts: number;
	ExecuteTime: string;
	ThreadID: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.ItemsInDescribeAuditRecords
export interface ItemsInDescribeAuditRecords {
	SQLRecord: SQLRecord[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeAuditRecordsResponse
export interface DescribeAuditRecordsResponse {
	RequestId: string;
	TotalRecordCount: number;
	PageNumber: number;
	PageRecordCount: number;
	Items: ItemsInDescribeAuditRecords;
}

