// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.TimeRangeItem
export interface TimeRangeItem {
	NodeId: string;
	StartTime: string;
	TaskId: string;
	EndTime: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.TimeRangeInDescribeAvaliableTimeRange
export interface TimeRangeInDescribeAvaliableTimeRange {
	TimeRangeItem: TimeRangeItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeAvaliableTimeRangeResponse
export interface DescribeAvaliableTimeRangeResponse {
	RequestId: string;
	TimeRange: TimeRangeInDescribeAvaliableTimeRange;
}

