// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.MessageProperty
export interface MessageProperty {
	Name: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.PropertyListInOnsDLQMessagePageQueryByGroupId
export interface PropertyListInOnsDLQMessagePageQueryByGroupId {
	MessageProperty: MessageProperty[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.OnsRestMessageDo
export interface OnsRestMessageDo {
	ReconsumeTimes: number;
	Flag: number;
	BornTimestamp: number;
	Body: string;
	BornHost: string;
	OffsetId: string;
	BodyCRC: number;
	MsgId: string;
	StoreTimestamp: number;
	InstanceId: string;
	StoreSize: number;
	StoreHost: string;
	Topic: string;
	PropertyList: PropertyListInOnsDLQMessagePageQueryByGroupId;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.MsgFoundListInOnsDLQMessagePageQueryByGroupId
export interface MsgFoundListInOnsDLQMessagePageQueryByGroupId {
	OnsRestMessageDo: OnsRestMessageDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.MsgFoundDo
export interface MsgFoundDo {
	TaskId: string;
	MaxPageCount: number;
	CurrentPage: number;
	MsgFoundList: MsgFoundListInOnsDLQMessagePageQueryByGroupId;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.OnsDLQMessagePageQueryByGroupIdResponse
export interface OnsDLQMessagePageQueryByGroupIdResponse {
	RequestId: string;
	HelpUrl: string;
	MsgFoundDo: MsgFoundDo;
}

