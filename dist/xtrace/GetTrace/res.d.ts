// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/xtrace.TagEntry
export interface TagEntry {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/xtrace.TagEntryListInGetTrace
export interface TagEntryListInGetTrace {
	TagEntry: TagEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/xtrace.LogEvent
export interface LogEvent {
	Timestamp: number;
	TagEntryList: TagEntryListInGetTrace;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/xtrace.LogEventList
export interface LogEventList {
	LogEvent: LogEvent[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/xtrace.Span
export interface Span {
	TraceID: string;
	OperationName: string;
	Duration: number;
	ServiceName: string;
	ServiceIp: string;
	Timestamp: number;
	RpcId: string;
	ResultCode: string;
	HaveStack: boolean;
	TagEntryList: TagEntryListInGetTrace;
	LogEventList: LogEventList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/xtrace.Spans
export interface Spans {
	Span: Span[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/xtrace.GetTraceResponse
export interface GetTraceResponse {
	RequestId: string;
	Spans: Spans;
}

