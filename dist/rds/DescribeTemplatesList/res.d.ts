// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ReadDBInstanceNames
export interface ReadDBInstanceNames {
	ReadDBInstanceName: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ReadDelayTimes
export interface ReadDelayTimes {
	ReadDelayTime: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ReadonlyInstanceDelayItem
export interface ReadonlyInstanceDelayItem {
	ReplayLatency: string;
	FlushLag: string;
	FlushLatency: string;
	SendLatency: string;
	WriteLag: string;
	ReplayLag: string;
	WriteLatency: string;
	ReadDBInstanceName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ReadonlyInstanceDelay
export interface ReadonlyInstanceDelay {
	ReadonlyInstanceDelayItem: ReadonlyInstanceDelayItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsItem
export interface ItemsItem {
	TotalUpdateRows: number;
	TemplateHash: string;
	AvgConsume: number;
	AvgScanRows: number;
	TotalConsume: number;
	SqlType: string;
	Template: string;
	TotalCounts: number;
	TotalScanRows: number;
	AvgUpdateRows: number;
	DBInstanceId: string;
	ReadDBInstanceNames: ReadDBInstanceNames;
	ReadDelayTimes: ReadDelayTimes;
	ReadonlyInstanceDelay: ReadonlyInstanceDelay;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeTemplatesList
export interface ItemsInDescribeTemplatesList {
	ItemsItem: ItemsItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeTemplatesListResponse
export interface DescribeTemplatesListResponse {
	RequestId: string;
	DBInstanceID: number;
	DBInstanceName: string;
	StartTime: string;
	EndTime: string;
	TotalRecords: number;
	PagingID: string;
	MaxRecordsPerPage: number;
	PageNumbers: number;
	ItemsNumbers: number;
	Items: ItemsInDescribeTemplatesList;
}

