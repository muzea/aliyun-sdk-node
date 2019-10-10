// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.SqlFlashbackTask
export interface SqlFlashbackTask {
	Id: number;
	GmtCreate: number;
	GmtModified: number;
	InstId: string;
	DbName: string;
	SearchStartTime: number;
	SearchEndTime: number;
	TableName: string;
	TraceId: string;
	SqlType: string;
	SqlPk: string;
	RecallType: number;
	RecallStatus: number;
	RecallProgress: number;
	RecallRestoreType: number;
	DownloadUrl: string;
	ExpireTime: number;
	SqlCounter: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.SqlFlashbackTasks
export interface SqlFlashbackTasks {
	SqlFlashbackTask: SqlFlashbackTask[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeSqlFlashbakTaskResponse
export interface DescribeSqlFlashbakTaskResponse {
	RequestId: string;
	Success: boolean;
	SqlFlashbackTasks: SqlFlashbackTasks;
}

