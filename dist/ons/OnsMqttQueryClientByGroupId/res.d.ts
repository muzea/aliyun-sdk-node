// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.MqttClientSetDo
export interface MqttClientSetDo {
	OnlineCount: number;
	PersistCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.OnsMqttQueryClientByGroupIdResponse
export interface OnsMqttQueryClientByGroupIdResponse {
	RequestId: string;
	HelpUrl: string;
	MqttClientSetDo: MqttClientSetDo;
}

