// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.MessageCallback
export interface MessageCallback {
	CallbackType: string;
	CallbackURL: string;
	EventTypeList: string;
	AuthSwitch: string;
	AuthKey: string;
	MnsEndpoint: string;
	MnsQueueName: string;
	AppId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetMessageCallbackResponse
export interface GetMessageCallbackResponse {
	RequestId: string;
	MessageCallback: MessageCallback;
}

