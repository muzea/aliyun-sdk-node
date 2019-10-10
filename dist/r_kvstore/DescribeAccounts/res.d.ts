// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DatabasePrivilege
export interface DatabasePrivilege {
	AccountPrivilege: string;
	AccountPrivilegeDetail: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DatabasePrivileges
export interface DatabasePrivileges {
	DatabasePrivilege: DatabasePrivilege[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.Account
export interface Account {
	InstanceId: string;
	AccountName: string;
	AccountStatus: string;
	AccountType: string;
	AccountDescription: string;
	PrivExceeded: string;
	DatabasePrivileges: DatabasePrivileges;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.AccountsInDescribeAccounts
export interface AccountsInDescribeAccounts {
	Account: Account[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeAccountsResponse
export interface DescribeAccountsResponse {
	RequestId: string;
	Accounts: AccountsInDescribeAccounts;
}

