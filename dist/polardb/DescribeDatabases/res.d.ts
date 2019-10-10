// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.Account
export interface Account {
	AccountName: string;
	AccountStatus: string;
	AccountPrivilege: string;
	PrivilegeStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.AccountsInDescribeDatabases
export interface AccountsInDescribeDatabases {
	Account: Account[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.Database
export interface Database {
	DBName: string;
	DBStatus: string;
	DBDescription: string;
	CharacterSetName: string;
	Engine: string;
	Accounts: AccountsInDescribeDatabases;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.Databases
export interface Databases {
	Database: Database[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DescribeDatabasesResponse
export interface DescribeDatabasesResponse {
	RequestId: string;
	Databases: Databases;
}

