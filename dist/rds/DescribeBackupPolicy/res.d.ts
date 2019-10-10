// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.Location
export interface Location {
	Endpoint: string;
	Bucket: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DuplicationLocation
export interface DuplicationLocation {
	Sotrage: string;
	Location: Location;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeBackupPolicyResponse
export interface DescribeBackupPolicyResponse {
	RequestId: string;
	BackupRetentionPeriod: number;
	PreferredNextBackupTime: string;
	PreferredBackupTime: string;
	PreferredBackupPeriod: string;
	BackupLog: string;
	LogBackupRetentionPeriod: number;
	EnableBackupLog: string;
	LocalLogRetentionHours: number;
	LocalLogRetentionSpace: string;
	Duplication: string;
	DuplicationContent: string;
	HighSpaceUsageProtection: string;
	LogBackupFrequency: string;
	CompressType: string;
	DuplicationLocation: DuplicationLocation;
}

