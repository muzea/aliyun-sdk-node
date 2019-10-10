// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ParameterChangeLog
export interface ParameterChangeLog {
	ModifyTime: string;
	OldParameterValue: string;
	NewParameterValue: string;
	ParameterName: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeModifyParameterLog
export interface ItemsInDescribeModifyParameterLog {
	ParameterChangeLog: ParameterChangeLog[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeModifyParameterLogResponse
export interface DescribeModifyParameterLogResponse {
	RequestId: string;
	Engine: string;
	DBInstanceId: string;
	EngineVersion: string;
	TotalRecordCount: number;
	PageNumber: number;
	PageRecordCount: number;
	Items: ItemsInDescribeModifyParameterLog;
}

