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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeMigrateTasks
export interface ItemsInDescribeMigrateTasks {
	MigrateTask: MigrateTask[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeMigrateTasksResponse
export interface DescribeMigrateTasksResponse {
	RequestId: string;
	DBInstanceId: string;
	TotalRecordCount: number;
	PageNumber: number;
	PageRecordCount: number;
	Items: ItemsInDescribeMigrateTasks;
}

