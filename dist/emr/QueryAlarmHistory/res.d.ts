// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EmrAlarmHistory
export interface EmrAlarmHistory {
	ClusterId: string;
	Role: string;
	InstanceId: string;
	Name: string;
	MetricName: string;
	AlarmTime: number;
	LastTime: number;
	State: string;
	Status: number;
	ContactGroups: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.AlarmHistoryList
export interface AlarmHistoryList {
	EmrAlarmHistory: EmrAlarmHistory[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.QueryAlarmHistoryResponse
export interface QueryAlarmHistoryResponse {
	RequestId: string;
	Total: string;
	Cursor: string;
	AlarmHistoryList: AlarmHistoryList;
}

