// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.ValueItem
export interface ValueItem {
	Name: string;
	Type: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.CauseDetail
export interface CauseDetail {
	Key: string;
	Value: ValueItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.Data
export interface Data {
	InternetIp: string;
	Level: string;
	InstanceName: string;
	AlarmEventAliasName: string;
	Type: string;
	Uuid: string;
	Solution: string;
	StartTime: number;
	EndTime: number;
	AlarmEventDesc: string;
	IntranetIp: string;
	CanBeDealOnLine: boolean;
	AlarmUniqueInfo: string;
	DataSource: string;
	CanCancelFault: boolean;
	CauseDetails: CauseDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.DescribeAlarmEventDetailResponse
export interface DescribeAlarmEventDetailResponse {
	RequestId: string;
	Data: Data;
}

