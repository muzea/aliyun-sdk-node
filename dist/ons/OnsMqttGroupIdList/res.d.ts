// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.MqttGroupIdDo
export interface MqttGroupIdDo {
	Id: number;
	ChannelId: number;
	Owner: string;
	GroupId: string;
	Topic: string;
	Status: number;
	CreateTime: number;
	UpdateTime: number;
	InstanceId: string;
	IndependentNaming: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.DataInOnsMqttGroupIdList
export interface DataInOnsMqttGroupIdList {
	MqttGroupIdDo: MqttGroupIdDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.OnsMqttGroupIdListResponse
export interface OnsMqttGroupIdListResponse {
	RequestId: string;
	HelpUrl: string;
	Data: DataInOnsMqttGroupIdList;
}

