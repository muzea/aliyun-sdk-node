// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SQLSlowLog
export interface SQLSlowLog {
	SlowLogId: number;
	SQLHASH: string;
	SQLIdStr: string;
	DBName: string;
	SQLText: string;
	MySQLTotalExecutionCounts: number;
	MySQLTotalExecutionTimes: number;
	TotalLockTimes: number;
	MaxLockTime: number;
	ParseTotalRowCounts: number;
	ParseMaxRowCount: number;
	ReturnTotalRowCounts: number;
	ReturnMaxRowCount: number;
	CreateTime: string;
	SQLServerTotalExecutionCounts: number;
	SQLServerTotalExecutionTimes: number;
	TotalLogicalReadCounts: number;
	TotalPhysicalReadCounts: number;
	ReportTime: string;
	MaxExecutionTime: number;
	AvgExecutionTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeSlowLogs
export interface ItemsInDescribeSlowLogs {
	SQLSlowLog: SQLSlowLog[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeSlowLogsResponse
export interface DescribeSlowLogsResponse {
	RequestId: string;
	DBInstanceId: string;
	Engine: string;
	StartTime: string;
	EndTime: string;
	TotalRecordCount: number;
	PageNumber: number;
	PageRecordCount: number;
	Items: ItemsInDescribeSlowLogs;
}

