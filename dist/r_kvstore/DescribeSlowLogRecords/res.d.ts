// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.LogRecords
export interface LogRecords {
	Category: string;
	Account: string;
	Id: number;
	Level: string;
	CreateTime: string;
	IPAddress: string;
	DataBaseName: string;
	ElapsedTime: number;
	ConnInfo: string;
	Content: number;
	Command: string;
	ExecuteTime: string;
	NodeId: string;
	AccountName: string;
	DBName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.ItemsInDescribeSlowLogRecords
export interface ItemsInDescribeSlowLogRecords {
	LogRecords: LogRecords[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeSlowLogRecordsResponse
export interface DescribeSlowLogRecordsResponse {
	RequestId: string;
	InstanceId: string;
	StartTime: string;
	Engine: string;
	TotalRecordCount: number;
	PageNumber: number;
	PageSize: number;
	PageRecordCount: number;
	Items: ItemsInDescribeSlowLogRecords;
}

