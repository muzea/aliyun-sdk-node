// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.AccountPrivilegeInfo
export interface AccountPrivilegeInfo {
	Account: string;
	AccountPrivilege: string;
	AccountPrivilegeDetail: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.AccountsInDescribeDatabases
export interface AccountsInDescribeDatabases {
	AccountPrivilegeInfo: AccountPrivilegeInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.Database
export interface Database {
	CharacterSetName: string;
	Engine: string;
	DBStatus: string;
	TDEStatus: string;
	DBName: string;
	DBInstanceId: string;
	DBDescription: string;
	Accounts: AccountsInDescribeDatabases;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DatabasesInDescribeDatabases
export interface DatabasesInDescribeDatabases {
	Database: Database[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeDatabasesResponse
export interface DescribeDatabasesResponse {
	RequestId: string;
	Databases: DatabasesInDescribeDatabases;
}

