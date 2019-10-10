// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.SubClientInfoDo
export interface SubClientInfoDo {
	SubGroupName: string;
	SubTime: number;
	ClientHost: string;
	ReconsumeTimes: number;
	CostTime: number;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.ClientList
export interface ClientList {
	SubClientInfoDo: SubClientInfoDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.SubMapDo
export interface SubMapDo {
	SubGroupName: string;
	SuccessCount: number;
	FailCount: number;
	ClientList: ClientList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.SubList
export interface SubList {
	SubMapDo: SubMapDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.TraceMapDo
export interface TraceMapDo {
	PubTime: number;
	Topic: string;
	PubGroupName: string;
	MsgId: string;
	Tag: string;
	MsgKey: string;
	BornHost: string;
	CostTime: number;
	Status: string;
	SubList: SubList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.TraceList
export interface TraceList {
	TraceMapDo: TraceMapDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.TraceData
export interface TraceData {
	QueryId: string;
	UserId: string;
	Topic: string;
	MsgId: string;
	MsgKey: string;
	Status: string;
	CreateTime: number;
	UpdateTime: number;
	InstanceId: string;
	TraceList: TraceList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.OnsTraceGetResultResponse
export interface OnsTraceGetResultResponse {
	RequestId: string;
	HelpUrl: string;
	TraceData: TraceData;
}

