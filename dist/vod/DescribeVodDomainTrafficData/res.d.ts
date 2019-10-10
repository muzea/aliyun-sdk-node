// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DataModule
export interface DataModule {
	DomesticValue: string;
	Value: string;
	OverseasValue: string;
	TimeStamp: string;
	HttpsOverseasValue: string;
	HttpsDomesticValue: string;
	HttpsValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TrafficDataPerInterval
export interface TrafficDataPerInterval {
	DataModule: DataModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribeVodDomainTrafficDataResponse
export interface DescribeVodDomainTrafficDataResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	EndTime: string;
	DataInterval: string;
	TrafficDataPerInterval: TrafficDataPerInterval;
}

