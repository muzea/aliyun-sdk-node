// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SlsLogItem
export interface SlsLogItem {
	Timestamp: number;
	SourceIp: string;
	HostName: string;
	Path: string;
	Content: string;
	PackMeta: string;
	PackId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SlsLogItemList
export interface SlsLogItemList {
	SlsLogItem: SlsLogItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SearchLogResponse
export interface SearchLogResponse {
	RequestId: string;
	Completed: boolean;
	SlsLogItemList: SlsLogItemList;
}

