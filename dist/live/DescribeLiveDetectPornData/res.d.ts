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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DetectPornData
export interface DetectPornData {
	DataModule: DataModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveDetectPornDataResponse
export interface DescribeLiveDetectPornDataResponse {
	RequestId: string;
	DetectPornData: DetectPornData;
}

