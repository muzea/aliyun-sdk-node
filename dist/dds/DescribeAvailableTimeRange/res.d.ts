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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.TimeRangeInDescribeAvailableTimeRange
export interface TimeRangeInDescribeAvailableTimeRange {
	TimeRangeItem: TimeRangeItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeAvailableTimeRangeResponse
export interface DescribeAvailableTimeRangeResponse {
	RequestId: string;
	TimeRange: TimeRangeInDescribeAvailableTimeRange;
}

