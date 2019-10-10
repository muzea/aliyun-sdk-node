// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeUpPeakTraffic
export interface DescribeUpPeakTraffic {
	PeakTime: string;
	QueryTime: string;
	StatName: string;
	BandWidth: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeUpPeakTraffics
export interface DescribeUpPeakTraffics {
	DescribeUpPeakTraffic: DescribeUpPeakTraffic[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeUpBpsPeakDataResponse
export interface DescribeUpBpsPeakDataResponse {
	RequestId: string;
	DescribeUpPeakTraffics: DescribeUpPeakTraffics;
}

