// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Account
export interface Account {
	DBInstanceId: string;
	AccountName: string;
	AccountStatus: string;
	AccountDescription: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.AccountsInDescribeAccounts
export interface AccountsInDescribeAccounts {
	Account: Account[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeAccountsResponse
export interface DescribeAccountsResponse {
	RequestId: string;
	Accounts: AccountsInDescribeAccounts;
}

