// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ListItem
export interface ListItem {
	Engine: string;
	UserVisible: boolean;
	NeedRestart: boolean;
	AccountType: number;
	CheckItemContent: string;
	SecurityIpList: string;
	IsAccountTypeNotSupport: boolean;
	ParamLevel: string;
	IsNetTypeNotSupport: boolean;
	MaxAccountCount: number;
	Property: string;
	IsInvalid: boolean;
	SecurityIpListNotBlank: boolean;
	MaxConnections: number;
	ShardKey: string;
	Progress: number;
	IsAccountFull: boolean;
	DbInstType: number;
	Delay: number;
	NetworkType: string;
	VpcId: string;
	CheckFailReason: string;
	DBInstanceStorageType: string;
	Type: string;
	AdminPwd: string;
	Port: number;
	ParamEnglishName: string;
	EngineVersion: string;
	IsDbFull: boolean;
	Table: string;
	ParamDesc: string;
	InstanceName: string;
	DbInstanceStorage: number;
	ParamDefaultValue: string;
	Result: boolean;
	TableName: string;
	DbName: string;
	AccountCount: number;
	IsNetworkTypeNotSupport: boolean;
	ParamType: string;
	AzoneIdNotMatch: boolean;
	DbInstanceMemory: number;
	TargetTableName: string;
	BroadcastType: string;
	SupportUpgradeAccountType: number;
	Region: string;
	Category: string;
	ReadWeight: number;
	Expired: number;
	InstanceDescription: string;
	DbCount: number;
	CheckItemName: string;
	InstanceStorage: string;
	VpcCloudDbInstanceId: string;
	IsShard: boolean;
	Stage: number;
	InstanceId: string;
	VswitchId: string;
	UsingNatIp: boolean;
	AdminUser: string;
	ParamRanges: string;
	ParamValue: string;
	ParamVariableName: string;
	LockMode: number;
	Status: number;
	AllowFullTableScan: boolean;
	SourceTableName: string;
	RegionName: string;
	IsLocked: boolean;
	ParamName: string;
	SubDomain: string;
	Broadcast: boolean;
	InvalidReason: string;
	CheckResult: string;
	Avz: string;
	ConnectUrl: string;
	MaxDbCount: number;
	ItemId: number;
	InstanceNetType: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ListInPutRestorePreCheck
export interface ListInPutRestorePreCheck {
	ListItem: ListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.PrecheckBackupResult
export interface PrecheckBackupResult {
	Result: boolean;
	List: ListInPutRestorePreCheck;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.PutRestorePreCheckResponse
export interface PutRestorePreCheckResponse {
	RequestId: string;
	Success: boolean;
	PrecheckBackupResult: PrecheckBackupResult;
}

