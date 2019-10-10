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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.TrafficDataPerInterval
export interface TrafficDataPerInterval {
	DataModule: DataModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveDomainTrafficDataResponse
export interface DescribeLiveDomainTrafficDataResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	EndTime: string;
	DataInterval: string;
	TrafficDataPerInterval: TrafficDataPerInterval;
}

