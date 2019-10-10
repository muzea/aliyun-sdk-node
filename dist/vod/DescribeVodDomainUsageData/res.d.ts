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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.UsageDataPerInterval
export interface UsageDataPerInterval {
	DataModule: DataModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribeVodDomainUsageDataResponse
export interface DescribeVodDomainUsageDataResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	EndTime: string;
	Type: string;
	Area: string;
	DataInterval: string;
	UsageDataPerInterval: UsageDataPerInterval;
}

