// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.Meta
export interface Meta {
	Path: string;
	Partition: string;
	Timestamp: number;
	ProjectName: string;
	BucketName: string;
	TableName: string;
	AccessKeyId: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.Overall
export interface Overall {
	BhvCount: number;
	ItemItemCount: number;
	UserUserCount: number;
	ItemRepetitiveRate: number;
	UserRepetitiveRate: number;
	UserLegalRate: number;
	ItemLegalRate: number;
	BhvLegalRate: number;
	UserCompleteRate: number;
	ItemCompleteRate: number;
	UserLoginRate: number;
	ItemLoginRate: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.SettingsItemInDeleteMix
export interface SettingsItemInDeleteMix {
	Name: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.Parameter
export interface Parameter {
	CategoryIndex: number;
	Window: number;
	Settings: SettingsItemInDeleteMix[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.ListItem
export interface ListItem {
	BizDate: number;
	Pv: number;
	Uv: number;
	Click: number;
	Ctr: number;
	UvCtr: number;
	PerUvBhv: number;
	PerUvClick: number;
	ClickUser: number;
	ActiveItem: number;
	TraceId: string;
	SceneId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.DetailItem
export interface DetailItem {
	BizDate: number;
	Pv: number;
	Uv: number;
	Click: number;
	Ctr: number;
	UvCtr: number;
	PerUvBhv: number;
	PerUvClick: number;
	ClickUser: number;
	ActiveItem: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.Result
export interface Result {
	Name: string;
	UserCountUsed: number;
	ChargeType: string;
	ItemCountUsed: number;
	CurrentQps: number;
	ItemCount: number;
	GmtCreate: string;
	DataSetVersion: string;
	RegionId: string;
	InstanceId: string;
	CommodityCode: string;
	Num: number;
	Type: string;
	ScenarioBased: boolean;
	ExpiredTime: string;
	GmtModified: string;
	Industry: string;
	TableName: string;
	UserCount: number;
	DurationSeconds: number;
	Scene: string;
	Qps: number;
	Status: string;
	LockMode: string;
	TraceId: string[];
	Uid: string[];
	SceneId: string[];
	Meta: Meta;
	Overall: Overall;
	Parameter: Parameter;
	List: ListItem[];
	Detail: DetailItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.UpgradeInstanceResponse
export interface UpgradeInstanceResponse {
	RequestId: string;
	Code: string;
	Message: string;
	Result: Result;
}

