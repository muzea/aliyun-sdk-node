// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.LogRecords
export interface LogRecords {
	Category: string;
	Id: number;
	HostAddress: string;
	CreateTime: string;
	QueryTimes: string;
	SQLText: string;
	ConnInfo: string;
	Content: number;
	ExecutionStartTime: string;
	ReturnRowCounts: number;
	AccountName: string;
	DocsExamined: number;
	DBName: string;
	KeysExamined: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.ItemsInDescribeSlowLogRecords
export interface ItemsInDescribeSlowLogRecords {
	LogRecords: LogRecords[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeSlowLogRecordsResponse
export interface DescribeSlowLogRecordsResponse {
	RequestId: string;
	Engine: string;
	TotalRecordCount: number;
	PageNumber: number;
	PageRecordCount: number;
	Items: ItemsInDescribeSlowLogRecords;
}

