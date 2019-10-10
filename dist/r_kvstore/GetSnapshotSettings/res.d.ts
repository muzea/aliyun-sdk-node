// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.GetSnapshotSettingsResponse
export interface GetSnapshotSettingsResponse {
	RequestId: string;
	InstanceId: string;
	BeginHour: number;
	EndHour: number;
	RetentionDay: number;
	MaxAutoSnapshots: number;
	MaxManualSnapshots: number;
	DayList: number;
	NextTime: string;
}

