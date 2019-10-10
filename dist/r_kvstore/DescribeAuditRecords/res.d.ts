// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SQL
export interface SQL {
	HostAddress: number;
	DatabaseName: string;
	IPAddress: string;
	SQLText: string;
	SQLType: string;
	TotalExecutionTimes: string;
	ExecuteTime: string;
	AccountName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.ItemsInDescribeAuditRecords
export interface ItemsInDescribeAuditRecords {
	SQL: SQL[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeAuditRecordsResponse
export interface DescribeAuditRecordsResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalRecordCount: number;
	InstanceName: string;
	StartTime: string;
	EndTime: string;
	Items: ItemsInDescribeAuditRecords;
}

