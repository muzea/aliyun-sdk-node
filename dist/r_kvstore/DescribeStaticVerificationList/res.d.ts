// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.AccountsItem
export interface AccountsItem {
	AccountPrivilege: string;
	AccountStatus: string;
	AccountPrivilegeDetail: string;
	AccountDescription: string;
	AccountID: string;
	AccountName: string;
	PrivExceeded: string;
	Engine: string;
	AccountType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.ItemsItem
export interface ItemsItem {
	ResultInfo: string;
	InsName: string;
	ConfictReason: string;
	SourceDetail: string;
	InternetIP: string;
	TaskParams: string;
	InconsistentFields: string;
	InstanceIdA: string;
	Deadline: string;
	ConflictGtid: string;
	DestinationDetail: string;
	DbType: string;
	Key: string;
	ModifiedTime: string;
	CreatedTime: string;
	RegionId: string;
	InstanceNetworkType: string;
	RecoveryMode: string;
	AbnormalType: string;
	SwitchTime: string;
	DBInstanceId: string;
	DatabaseName: string;
	DetailInfo: string;
	SecurityIPList: string;
	Id: number;
	Status: number;
	Schema: string;
	ReadWriteType: string;
	DestinationInstanceId: string;
	HasInternetIP: boolean;
	PrepareInterval: string;
	OccurTime: string;
	InstanceIdB: string;
	StartTime: string;
	SourceInstanceId: string;
	InconsistentType: string;
	ConfictKey: string;
	KeyType: string;
	TaskType: string;
	Accounts: AccountsItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeStaticVerificationListResponse
export interface DescribeStaticVerificationListResponse {
	RequestId: string;
	ReplicaId: string;
	SourceInstanceId: string;
	SourceDBNumber: number;
	SourceTableNumber: number;
	SourceCountNumber: number;
	SourceDBSize: number;
	DestinationInstanceId: string;
	DestinationDBNumber: number;
	DestinationTableNumber: number;
	DestinationCountNumber: number;
	DestinationDBSize: number;
	ConsistencyPercent: string;
	Items: ItemsItem[];
}

