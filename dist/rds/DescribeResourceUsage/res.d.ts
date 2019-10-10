// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeResourceUsageResponse
export interface DescribeResourceUsageResponse {
	RequestId: string;
	DBInstanceId: string;
	Engine: string;
	DiskUsed: number;
	DataSize: number;
	LogSize: number;
	BackupSize: number;
	BackupOssDataSize: number;
	BackupOssLogSize: number;
	SQLSize: number;
	ColdBackupSize: number;
}

