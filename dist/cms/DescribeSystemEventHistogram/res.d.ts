// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.SystemEventHistogram
export interface SystemEventHistogram {
	Count: number;
	StartTime: number;
	EndTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.SystemEventHistograms
export interface SystemEventHistograms {
	SystemEventHistogram: SystemEventHistogram[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeSystemEventHistogramResponse
export interface DescribeSystemEventHistogramResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Success: string;
	SystemEventHistograms: SystemEventHistograms;
}

