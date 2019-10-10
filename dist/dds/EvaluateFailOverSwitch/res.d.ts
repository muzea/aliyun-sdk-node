// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.AccountsItem
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.ItemsItem
export interface ItemsItem {
	ResultInfo: string;
	InsName: string;
	InternetIP: string;
	ConfictReason: string;
	SourceDetail: string;
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
	SecurityIPList: string;
	DetailInfo: string;
	Id: number;
	Status: number;
	Schema: string;
	ReadWriteType: string;
	HasInternetIP: boolean;
	DestinationInstanceId: string;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.ReportsItem
export interface ReportsItem {
	CheckType: string;
	Severity: string;
	ReasonCode: string;
	ReasonMessage: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.EvaluateFailOverSwitchResponse
export interface EvaluateFailOverSwitchResponse {
	RequestId: string;
	ReplicaId: string;
	EvaluateResult: string;
	Items: ItemsItem[];
	Reports: ReportsItem[];
}

