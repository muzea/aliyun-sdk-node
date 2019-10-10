// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.Database
export interface Database {
	DbName: string;
	Status: number;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.Databases
export interface Databases {
	Database: Database[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeDbInstanceDbsResponse
export interface DescribeDbInstanceDbsResponse {
	RequestId: string;
	Success: boolean;
	Total: string;
	Databases: Databases;
}

