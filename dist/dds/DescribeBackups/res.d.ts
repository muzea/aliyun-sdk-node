// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Backup
export interface Backup {
	BackupDBNames: string;
	BackupId: number;
	BackupStatus: string;
	BackupStartTime: string;
	BackupEndTime: string;
	BackupType: string;
	BackupMode: string;
	BackupMethod: string;
	BackupDownloadURL: string;
	BackupSize: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Backups
export interface Backups {
	Backup: Backup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeBackupsResponse
export interface DescribeBackupsResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	Backups: Backups;
}

