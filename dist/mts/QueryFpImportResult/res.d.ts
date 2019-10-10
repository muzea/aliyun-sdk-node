// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PageInfo
export interface PageInfo {
	PageIndex: number;
	PageSize: number;
	Total: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FpResultLogInfo
export interface FpResultLogInfo {
	LogPath: string;
	LogName: string;
	LogStartTime: number;
	LogEndTime: number;
	LogSize: number;
	CreateTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FpResultLogInfoList
export interface FpResultLogInfoList {
	FpResultLogInfo: FpResultLogInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryFpImportResultResponse
export interface QueryFpImportResultResponse {
	RequestId: string;
	LogCount: number;
	PageInfo: PageInfo;
	FpResultLogInfoList: FpResultLogInfoList;
}

