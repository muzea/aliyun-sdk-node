// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DbNamesInDescribeBackupDbs
export interface DbNamesInDescribeBackupDbs {
	dbName: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeBackupDbsResponse
export interface DescribeBackupDbsResponse {
	RequestId: string;
	Success: boolean;
	DbNames: DbNamesInDescribeBackupDbs;
}

