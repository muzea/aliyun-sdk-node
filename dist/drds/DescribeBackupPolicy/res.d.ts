// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.BackupPolicyDO
export interface BackupPolicyDO {
	NextBackupActuallyTime: string;
	BackupMode: string;
	PreferredBackupPeriod: string;
	DataBackupRetentionPeriod: number;
	BackupAppName: string;
	LocalLogRetentionSpace: number;
	HighSpaceUsageProtection: number;
	BackupType: string;
	BackupLevel: string;
	LocalLogRetentionHours: number;
	GmtCreate: number;
	PreferredBackupTime: string;
	BackupDbName: string;
	BackupRetentionPeriod: number;
	GmtModified: number;
	BackupLog: string;
	LogBackupRetentionPeriod: number;
	BackupPolicyMode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeBackupPolicyResponse
export interface DescribeBackupPolicyResponse {
	RequestId: string;
	Success: boolean;
	BackupPolicyDO: BackupPolicyDO;
}

