// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DataModule
export interface DataModule {
	App: string;
	Domain: string;
	Region: string;
	BpsValue: string;
	HttpsTrafficValue: string;
	Value: string;
	TrafficValue: string;
	Scene: string;
	Count: number;
	TimeStamp: string;
	HttpBpsValue: string;
	Fee: string;
	HttpsBpsValue: string;
	HttpTrafficValue: string;
	Stream: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RealTimeBpsDataPerInterval
export interface RealTimeBpsDataPerInterval {
	DataModule: DataModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveDomainRealTimeBpsDataResponse
export interface DescribeLiveDomainRealTimeBpsDataResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	EndTime: string;
	DataInterval: string;
	RealTimeBpsDataPerInterval: RealTimeBpsDataPerInterval;
}

