// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.Backup
export interface Backup {
	BackupId: string;
	DBClusterId: string;
	BackupStatus: string;
	BackupStartTime: string;
	BackupEndTime: string;
	BackupType: string;
	BackupMode: string;
	BackupMethod: string;
	StoreStatus: string;
	BackupSetSize: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.ItemsInDescribeBackups
export interface ItemsInDescribeBackups {
	Backup: Backup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DescribeBackupsResponse
export interface DescribeBackupsResponse {
	RequestId: string;
	TotalRecordCount: string;
	PageNumber: string;
	PageRecordCount: string;
	Items: ItemsInDescribeBackups;
}

