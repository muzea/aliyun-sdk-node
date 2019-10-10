// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.Backup
export interface Backup {
	BackupId: number;
	BackupDBNames: string;
	BackupStatus: string;
	BackupStartTime: string;
	BackupEndTime: string;
	BackupType: string;
	BackupMode: string;
	BackupMethod: string;
	BackupDownloadURL: string;
	BackupSize: number;
	EngineVersion: string;
	NodeInstanceId: string;
	BackupIntranetDownloadURL: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.Backups
export interface Backups {
	Backup: Backup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeBackupsResponse
export interface DescribeBackupsResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	Backups: Backups;
}

