// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.BackupJob
export interface BackupJob {
	BackupProgressStatus: string;
	BackupStatus: string;
	JobMode: string;
	Process: string;
	TaskAction: string;
	BackupJobId: string;
	BackupId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeBackupTasks
export interface ItemsInDescribeBackupTasks {
	BackupJob: BackupJob[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeBackupTasksResponse
export interface DescribeBackupTasksResponse {
	RequestId: string;
	Items: ItemsInDescribeBackupTasks;
}

