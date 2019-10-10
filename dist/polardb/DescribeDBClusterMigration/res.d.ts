// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DescribeDBClusterMigrationResponse
export interface DescribeDBClusterMigrationResponse {
	RequestId: string;
	DBClusterId: string;
	SourceRDSDBInstanceId: string;
	MigrationStatus: string;
	Topologies: string;
	DelayedSeconds: number;
	ExpiredTime: string;
	RdsReadWriteMode: string;
	DBClusterReadWriteMode: string;
	Comment: string;
}

