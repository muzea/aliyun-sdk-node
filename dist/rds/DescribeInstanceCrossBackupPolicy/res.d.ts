// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeInstanceCrossBackupPolicyResponse
export interface DescribeInstanceCrossBackupPolicyResponse {
	RequestId: string;
	DBInstanceId: string;
	DBInstanceDescription: string;
	DBInstanceStatus: string;
	DBInstanceStatusDesc: string;
	Engine: string;
	EngineVersion: string;
	RegionId: string;
	CrossBackupRegion: string;
	CrossBackupType: string;
	BackupEnabledTime: string;
	BackupEnabled: string;
	LogBackupEnabled: string;
	LogBackupEnabledTime: string;
	StorageOwner: string;
	StorageType: string;
	Endpoint: string;
	RetentType: number;
	Retention: number;
	LockMode: string;
	RelService: string;
	RelServiceId: string;
}

