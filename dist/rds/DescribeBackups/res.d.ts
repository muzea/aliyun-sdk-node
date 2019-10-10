// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.Backup
export interface Backup {
	BackupId: string;
	DBInstanceId: string;
	BackupStatus: string;
	BackupStartTime: string;
	BackupEndTime: string;
	BackupType: string;
	BackupMode: string;
	BackupMethod: string;
	BackupDownloadURL: string;
	BackupIntranetDownloadURL: string;
	BackupLocation: string;
	BackupExtractionStatus: string;
	BackupScale: string;
	BackupDBNames: string;
	TotalBackupSize: number;
	BackupSize: number;
	HostInstanceID: string;
	StoreStatus: string;
	MetaStatus: string;
	SlaveStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeBackups
export interface ItemsInDescribeBackups {
	Backup: Backup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeBackupsResponse
export interface DescribeBackupsResponse {
	RequestId: string;
	TotalRecordCount: string;
	PageNumber: string;
	PageRecordCount: string;
	TotalBackupSize: number;
	Items: ItemsInDescribeBackups;
}

