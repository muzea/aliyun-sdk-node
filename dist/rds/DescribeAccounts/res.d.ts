// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DatabasePrivilege
export interface DatabasePrivilege {
	DBName: string;
	AccountPrivilege: string;
	AccountPrivilegeDetail: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DatabasePrivileges
export interface DatabasePrivileges {
	DatabasePrivilege: DatabasePrivilege[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstanceAccount
export interface DBInstanceAccount {
	DBInstanceId: string;
	AccountName: string;
	AccountStatus: string;
	AccountType: string;
	AccountDescription: string;
	PrivExceeded: string;
	DatabasePrivileges: DatabasePrivileges;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.AccountsInDescribeAccounts
export interface AccountsInDescribeAccounts {
	DBInstanceAccount: DBInstanceAccount[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeAccountsResponse
export interface DescribeAccountsResponse {
	RequestId: string;
	Accounts: AccountsInDescribeAccounts;
}

