// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.BackupDbs
export interface BackupDbs {
	backupDb: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.BackupSet
export interface BackupSet {
	Id: string;
	BackupStartTime: number;
	BackupEndTime: number;
	BackupMode: string;
	BackupLevel: string;
	BackupType: string;
	Status: number;
	EnableRecovery: boolean;
	BackupTotalSize: string;
	BackupConsitentTime: string;
	BackupDbs: BackupDbs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.BackupSets
export interface BackupSets {
	backupSet: BackupSet[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeBackupSetsResponse
export interface DescribeBackupSetsResponse {
	RequestId: string;
	Success: boolean;
	BackupSets: BackupSets;
}

