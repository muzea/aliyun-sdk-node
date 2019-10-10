// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SpotPriceType
export interface SpotPriceType {
	ZoneId: string;
	InstanceType: string;
	IoOptimized: string;
	Timestamp: string;
	NetworkType: string;
	SpotPrice: number;
	OriginPrice: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SpotPrices
export interface SpotPrices {
	SpotPriceType: SpotPriceType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeSpotPriceHistoryResponse
export interface DescribeSpotPriceHistoryResponse {
	RequestId: string;
	NextOffset: number;
	Currency: string;
	SpotPrices: SpotPrices;
}

