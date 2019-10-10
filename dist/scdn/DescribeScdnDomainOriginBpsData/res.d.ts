// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.HttpCodeDataModule
export interface HttpCodeDataModule {
	Code: string;
	Proportion: string;
	Count: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.HttpCodeDataPerInterval
export interface HttpCodeDataPerInterval {
	HttpCodeDataModule: HttpCodeDataModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DataModule
export interface DataModule {
	HttpAccValue: string;
	BpsValue: string;
	HttpQpsValue: string;
	ByteHitRate: string;
	HttpsTrafficValue: string;
	AccValue: string;
	Value: string;
	TrafficValue: string;
	TimeStamp: string;
	QpsValue: string;
	ReqHitRate: string;
	HttpBpsValue: string;
	HttpsQpsValue: string;
	HttpsBpsValue: string;
	HttpTrafficValue: string;
	HttpsAccValue: string;
	OriginBpsValue: string;
	HttpsOriginBpsValue: string;
	HttpOriginBpsValue: string;
	HttpCodeDataPerInterval: HttpCodeDataPerInterval;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.OriginBpsDataPerInterval
export interface OriginBpsDataPerInterval {
	DataModule: DataModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnDomainOriginBpsDataResponse
export interface DescribeScdnDomainOriginBpsDataResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	EndTime: string;
	DataInterval: string;
	OriginBpsDataPerInterval: OriginBpsDataPerInterval;
}

