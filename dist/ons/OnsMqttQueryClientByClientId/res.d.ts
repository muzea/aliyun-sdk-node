// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.SubscriptionDo
export interface SubscriptionDo {
	ParentTopic: string;
	SubTopic: string;
	Qos: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.SubScriptonData
export interface SubScriptonData {
	SubscriptionDo: SubscriptionDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.MqttClientInfoDo
export interface MqttClientInfoDo {
	Online: boolean;
	ClientId: string;
	SocketChannel: string;
	LastTouch: number;
	SubScriptonData: SubScriptonData;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.OnsMqttQueryClientByClientIdResponse
export interface OnsMqttQueryClientByClientIdResponse {
	RequestId: string;
	HelpUrl: string;
	MqttClientInfoDo: MqttClientInfoDo;
}

