// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SQLSlowRecord
export interface SQLSlowRecord {
	HostAddress: string;
	DBName: string;
	SQLText: string;
	QueryTimes: number;
	LockTimes: number;
	ParseRowCounts: number;
	ReturnRowCounts: number;
	ExecutionStartTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeSlowLogRecords
export interface ItemsInDescribeSlowLogRecords {
	SQLSlowRecord: SQLSlowRecord[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeSlowLogRecordsResponse
export interface DescribeSlowLogRecordsResponse {
	RequestId: string;
	DBInstanceId: string;
	Engine: string;
	TotalRecordCount: number;
	PageNumber: number;
	PageRecordCount: number;
	Items: ItemsInDescribeSlowLogRecords;
}

