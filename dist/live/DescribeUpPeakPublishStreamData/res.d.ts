// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeUpPeakPublishStreamData
export interface DescribeUpPeakPublishStreamData {
	PublishStreamNum: number;
	PeakTime: string;
	QueryTime: string;
	StatName: string;
	BandWidth: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeUpPeakPublishStreamDatas
export interface DescribeUpPeakPublishStreamDatas {
	DescribeUpPeakPublishStreamData: DescribeUpPeakPublishStreamData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeUpPeakPublishStreamDataResponse
export interface DescribeUpPeakPublishStreamDataResponse {
	RequestId: string;
	DescribeUpPeakPublishStreamDatas: DescribeUpPeakPublishStreamDatas;
}

