// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DataItem
export interface DataItem {
	Name: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DataInDescribeVodTranscodeData
export interface DataInDescribeVodTranscodeData {
	DataItem: DataItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TranscodeDataItem
export interface TranscodeDataItem {
	TimeStamp: string;
	Data: DataInDescribeVodTranscodeData;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TranscodeData
export interface TranscodeData {
	TranscodeDataItem: TranscodeDataItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribeVodTranscodeDataResponse
export interface DescribeVodTranscodeDataResponse {
	RequestId: string;
	DataInterval: string;
	TranscodeData: TranscodeData;
}

