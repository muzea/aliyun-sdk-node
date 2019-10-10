// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.KeyValuePair
export interface KeyValuePair {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.BasicStatisticsReportSubItem
export interface BasicStatisticsReportSubItem {
	BasicStatisticsReportSubItemName: string;
	Value: string;
	Count: number;
	Percentage: number;
	Row: KeyValuePair[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.SubItems
export interface SubItems {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	List: BasicStatisticsReportSubItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListBasicStatisticsReportSubItemsResponse
export interface ListBasicStatisticsReportSubItemsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	SubItems: SubItems;
}

