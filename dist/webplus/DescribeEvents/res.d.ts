// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.MsgParams
export interface MsgParams {
	MsgParam: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.ObjectAttr
export interface ObjectAttr {
	AttributeName: string;
	AttributeValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.ObjectAttrs
export interface ObjectAttrs {
	ObjectAttr: ObjectAttr[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.Event
export interface Event {
	EventId: string;
	EventTimestamp: number;
	EventMessage: string;
	EnvId: string;
	AppId: string;
	EventLevel: string;
	TraceId: string;
	EnventName: string;
	MsgCode: string;
	PrimaryUserId: string;
	PrimaryUserName: string;
	SecondUserId: string;
	SecondUserName: string;
	ObjectId: string;
	ObjectName: string;
	ObjectType: string;
	MsgParams: MsgParams;
	ObjectAttrs: ObjectAttrs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.Events
export interface Events {
	Event: Event[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DescribeEventsResponse
export interface DescribeEventsResponse {
	RequestId: string;
	Code: string;
	Message: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	Events: Events;
}

