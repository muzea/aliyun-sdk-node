// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.EventHistogram
export interface EventHistogram {
	Count: number;
	StartTime: number;
	EndTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.EventHistograms
export interface EventHistograms {
	EventHistogram: EventHistogram[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeCustomEventHistogramResponse
export interface DescribeCustomEventHistogramResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Success: string;
	EventHistograms: EventHistograms;
}

