// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.MigrateTask
export interface MigrateTask {
	BackupMode: string;
	EndTime: string;
	Desc: string;
	MigrateTaskId: string;
	CreateTime: string;
	DBName: string;
	MigrateIaskId: string;
	IsDBReplaced: string;
	TaskType: string;
	Status: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeMigrateTasksForSQLServer
export interface ItemsInDescribeMigrateTasksForSQLServer {
	MigrateTask: MigrateTask[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeMigrateTasksForSQLServerResponse
export interface DescribeMigrateTasksForSQLServerResponse {
	RequestId: string;
	DBInstanceID: string;
	DBInstanceName: string;
	StartTime: string;
	EndTime: string;
	TotalRecordCount: number;
	PageNumber: number;
	PageRecordCount: number;
	Items: ItemsInDescribeMigrateTasksForSQLServer;
}

