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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.BpsDataPerInterval
export interface BpsDataPerInterval {
	DataModule: DataModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribeVodDomainBpsDataResponse
export interface DescribeVodDomainBpsDataResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	EndTime: string;
	LocationNameEn: string;
	IspNameEn: string;
	DataInterval: string;
	BpsDataPerInterval: BpsDataPerInterval;
}

