// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.HttpCodeDataModule
export interface HttpCodeDataModule {
	Code: number;
	Proportion: number;
	Count: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.HttpCodeDataPerInterval
export interface HttpCodeDataPerInterval {
	HttpCodeDataModule: HttpCodeDataModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.WebsocketHttpCodeDataPerInterval
export interface WebsocketHttpCodeDataPerInterval {
	HttpCodeDataModule: HttpCodeDataModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DataModule
export interface DataModule {
	StaticHttpTraffic: number;
	StaticHttpBps: number;
	DynamicHttpsAcc: number;
	DynamicHttpOriginBps: number;
	DynamicHttpsOriginBps: number;
	StaticHttpsOriginTraffic: number;
	StaticHttpAcc: number;
	DynamicHttpsBps: number;
	StaticHttpsBps: number;
	OriginTraffic: number;
	DynamicHttpAcc: number;
	StaticHttpsTraffic: number;
	TimeStamp: string;
	Acc: number;
	StaticHttpsAcc: number;
	DynamicHttpOriginTraffic: number;
	ReqHitRate: number;
	StaticHttpQps: number;
	WebsocketBps: number;
	WebsocketTraffic: number;
	DynamicHttpTraffic: number;
	OriginBps: number;
	Bps: number;
	DynamicHttpBps: number;
	StaticHttpOriginTraffic: number;
	StaticHttpOriginBps: number;
	Value: string;
	Qps: number;
	DynamicHttpsTraffic: number;
	StaticHttpsQps: number;
	DynamicHttpsOriginTraffic: number;
	StaticHttpsOriginBps: number;
	ByteHitRate: number;
	DynamicHttpsQps: number;
	DynamicHttpQps: number;
	Traffic: number;
	HttpCodeDataPerInterval: HttpCodeDataPerInterval;
	WebsocketHttpCodeDataPerInterval: WebsocketHttpCodeDataPerInterval;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.RealTimeSrcBpsDataPerInterval
export interface RealTimeSrcBpsDataPerInterval {
	DataModule: DataModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainRealTimeSrcBpsDataResponse
export interface DescribeDcdnDomainRealTimeSrcBpsDataResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	EndTime: string;
	DataInterval: string;
	RealTimeSrcBpsDataPerInterval: RealTimeSrcBpsDataPerInterval;
}

