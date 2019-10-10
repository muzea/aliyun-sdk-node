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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.DataInOnsMessageGetByKey
export interface DataInOnsMessageGetByKey {
	OnsRestMessageDo: OnsRestMessageDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.OnsMessageGetByKeyResponse
export interface OnsMessageGetByKeyResponse {
	RequestId: string;
	HelpUrl: string;
	Data: DataInOnsMessageGetByKey;
}

