// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.RestoreBackupResponse
export interface RestoreBackupResponse {
	RequestId: string;
	BizId: string;
	DataSourceId: number;
	TaskType: string;
	TaskStatus: string;
	StartTime: number;
	EndTime: number;
	TaskDetail: string;
	TaskResultDetail: string;
	TaskProcess: number;
	TriggerUser: string;
	TriggerType: string;
	GmtCreate: number;
	GmtModified: number;
	ClusterBizId: string;
	HostName: string;
	EcmTaskId: number;
}

