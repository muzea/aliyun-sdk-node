// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.ConnectionDo
export interface ConnectionDo {
	ClientAddr: string;
	ClientId: string;
	Version: string;
	Language: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.ConnectionSet
export interface ConnectionSet {
	ConnectionDo: ConnectionDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.MessageProperty
export interface MessageProperty {
	Name: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.PropertyListInOnsDLQMessageGetById
export interface PropertyListInOnsDLQMessageGetById {
	MessageProperty: MessageProperty[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.StatsDataDo
export interface StatsDataDo {
	X: number;
	Y: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.RecordsInOnsMqttQueryHistoryOnline
export interface RecordsInOnsMqttQueryHistoryOnline {
	StatsDataDo: StatsDataDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.TagsSet
export interface TagsSet {
	Tag: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.SubscriptionData
export interface SubscriptionData {
	Topic: string;
	SubString: string;
	SubVersion: number;
	TagsSet: TagsSet;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.SubscriptionSet
export interface SubscriptionSet {
	SubscriptionData: SubscriptionData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.ConsumerRunningDataDo
export interface ConsumerRunningDataDo {
	GroupId: string;
	Topic: string;
	Rt: number;
	OkTps: number;
	FailedTps: number;
	FailedCountPerHour: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.RunningDataList
export interface RunningDataList {
	ConsumerRunningDataDo: ConsumerRunningDataDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.TrackList
export interface TrackList {
	Track: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.ThreadTrackDo
export interface ThreadTrackDo {
	Thread: string;
	TrackList: TrackList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.Jstack
export interface Jstack {
	ThreadTrackDo: ThreadTrackDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.ConsumerConnectionInfoDo
export interface ConsumerConnectionInfoDo {
	ClientId: string;
	Connection: string;
	Language: string;
	Version: string;
	ConsumeModel: string;
	ConsumeType: string;
	ThreadCount: number;
	StartTimeStamp: number;
	LastTimeStamp: number;
	SubscriptionSet: SubscriptionSet;
	RunningDataList: RunningDataList;
	Jstack: Jstack;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.ConsumerConnectionInfoList
export interface ConsumerConnectionInfoList {
	ConsumerConnectionInfoDo: ConsumerConnectionInfoDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.DetailInTopicDo
export interface DetailInTopicDo {
	DelayTime: number;
	TotalDiff: number;
	Topic: string;
	LastTimestamp: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.DetailInTopicListInOnsConsumerAccumulate
export interface DetailInTopicListInOnsConsumerAccumulate {
	DetailInTopicDo: DetailInTopicDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.SubscriptionDataListItem
export interface SubscriptionDataListItem {
	MessageModel: string;
	SubString: string;
	GroupId: string;
	Topic: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.SubscriptionDataListInOnsGroupSubDetail
export interface SubscriptionDataListInOnsGroupSubDetail {
	SubscriptionDataListItem: SubscriptionDataListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.ConnectionList
export interface ConnectionList {
	ConnectionDo: ConnectionDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.Data
export interface Data {
	DelayTime: number;
	ConsumeModel: string;
	Title: string;
	Online: boolean;
	Flag: number;
	BornTimestamp: number;
	RebalanceOK: boolean;
	XUnit: string;
	OffsetId: string;
	SubscriptionSame: boolean;
	MaxTimeStamp: number;
	InstanceId: string;
	ConsumeTps: number;
	GroupId: string;
	Topic: string;
	ConsumeTimeStamp: number;
	TotalCount: number;
	ReconsumeTimes: number;
	TotalDiff: number;
	Body: string;
	BornHost: string;
	MinTimeStamp: number;
	LastTimeStamp: number;
	MessageModel: string;
	InstanceType: number;
	BodyCRC: number;
	MsgId: string;
	StoreTimestamp: number;
	StoreSize: number;
	StoreHost: string;
	YUnit: string;
	LastTimestamp: number;
	Perm: number;
	ConnectionSet: ConnectionSet;
	PropertyList: PropertyListInOnsDLQMessageGetById;
	Records: RecordsInOnsMqttQueryHistoryOnline;
	ConsumerConnectionInfoList: ConsumerConnectionInfoList;
	DetailInTopicList: DetailInTopicListInOnsConsumerAccumulate;
	SubscriptionDataList: SubscriptionDataListInOnsGroupSubDetail;
	ConnectionList: ConnectionList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.OnsTopicStatusResponse
export interface OnsTopicStatusResponse {
	RequestId: string;
	HelpUrl: string;
	Data: Data;
}

