// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DbPrivilege
export interface DbPrivilege {
	DbName: string;
	Privilege: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DbPrivileges
export interface DbPrivileges {
	DbPrivilege: DbPrivilege[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.InstanceAccount
export interface InstanceAccount {
	AccountName: string;
	Host: string;
	AccountType: number;
	Description: string;
	DbPrivileges: DbPrivileges;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.InstanceAccounts
export interface InstanceAccounts {
	InstanceAccount: InstanceAccount[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeInstanceAccountsResponse
export interface DescribeInstanceAccountsResponse {
	RequestId: string;
	Success: boolean;
	InstanceAccounts: InstanceAccounts;
}

