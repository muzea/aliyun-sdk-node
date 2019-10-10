// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DatabasePrivilege
export interface DatabasePrivilege {
	DBName: string;
	AccountPrivilege: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DBAccount
export interface DBAccount {
	AccountName: string;
	AccountStatus: string;
	AccountDescription: string;
	AccountType: string;
	PrivilegeExceeded: string;
	DatabasePrivileges: DatabasePrivilege[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DescribeAccountsResponse
export interface DescribeAccountsResponse {
	RequestId: string;
	Accounts: DBAccount[];
}

