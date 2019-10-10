// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/xtrace.TraceInfo
export interface TraceInfo {
	TraceID: string;
	OperationName: string;
	ServiceName: string;
	ServiceIp: string;
	Duration: number;
	Timestamp: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/xtrace.TraceInfos
export interface TraceInfos {
	TraceInfo: TraceInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/xtrace.PageBean
export interface PageBean {
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	TraceInfos: TraceInfos;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/xtrace.SearchTracesResponse
export interface SearchTracesResponse {
	RequestId: string;
	PageBean: PageBean;
}

