// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DataModule
export interface DataModule {
	PeakTime: string;
	OverseasValue: string;
	SpecialValue: string;
	HttpsAccOverseasValue: string;
	HttpsOverseasValue: string;
	DomesticValue: string;
	AccValue: string;
	Value: string;
	AccDomesticValue: string;
	TimeStamp: string;
	HttpsDomesticValue: string;
	HttpsValue: string;
	HttpsAccValue: string;
	AccOverseasValue: string;
	HttpsAccDomesticValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.RealTimeSrcBpsDataPerInterval
export interface RealTimeSrcBpsDataPerInterval {
	DataModule: DataModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainRealTimeSrcBpsDataResponse
export interface DescribeDomainRealTimeSrcBpsDataResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	EndTime: string;
	DataInterval: string;
	RealTimeSrcBpsDataPerInterval: RealTimeSrcBpsDataPerInterval;
}

