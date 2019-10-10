// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DataItem
export interface DataItem {
	Name: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DataInDescribeVodAIData
export interface DataInDescribeVodAIData {
	DataItem: DataItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.AIDataItem
export interface AIDataItem {
	TimeStamp: string;
	Data: DataInDescribeVodAIData;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.AIData
export interface AIData {
	AIDataItem: AIDataItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribeVodAIDataResponse
export interface DescribeVodAIDataResponse {
	RequestId: string;
	DataInterval: string;
	AIData: AIData;
}

