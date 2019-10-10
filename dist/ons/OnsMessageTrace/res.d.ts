// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.MessageTrack
export interface MessageTrack {
	ConsumerGroup: string;
	TrackType: string;
	ExceptionDesc: string;
	InstanceId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.DataInOnsMessageTrace
export interface DataInOnsMessageTrace {
	MessageTrack: MessageTrack[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.OnsMessageTraceResponse
export interface OnsMessageTraceResponse {
	RequestId: string;
	HelpUrl: string;
	Data: DataInOnsMessageTrace;
}

