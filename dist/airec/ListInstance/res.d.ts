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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.SubProgressInfosItem
export interface SubProgressInfosItem {
	Type: string;
	Progress: number;
	Detail: string;
	TotalNum: number;
	FinishedNum: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.ResultItem
export interface ResultItem {
	Name: string;
	ChargeType: string;
	ErrorLevel: string;
	ItemType: string;
	GmtCreate: string;
	DataSetVersion: string;
	RegionId: string;
	TotalProgress: number;
	InstanceId: string;
	TraceId: string;
	CommodityCode: string;
	MatchInfo: string;
	Type: string;
	Message: string;
	ExpiredTime: string;
	Timestamp: string;
	ErrorType: string;
	GmtModified: string;
	Industry: string;
	TableName: string;
	ItemId: string;
	Scene: string;
	TraceInfo: string;
	Position: number;
	Status: string;
	LockMode: string;
	Weight: number;
	Meta: Meta;
	Parameter: Parameter;
	SubProgressInfos: SubProgressInfosItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.ListInstanceResponse
export interface ListInstanceResponse {
	RequestId: string;
	Code: string;
	Message: string;
	Result: ResultItem[];
}

