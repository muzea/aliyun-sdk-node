// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Pageable
export interface Pageable {
	PageNumber: number;
	PageSize: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Commodity
export interface Commodity {
	CommodityId: string;
	ApplicationId: string;
	CommoditySpecs: string;
	Properties: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Commodities
export interface Commodities {
	Commodity: Commodity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Data
export interface Data {
	ResourceType: string;
	TotalCount: number;
	Resource: string;
	Pageable: Pageable;
	Commodities: Commodities;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.DescribeCommoditiesResponse
export interface DescribeCommoditiesResponse {
	RequestId: string;
	Success: boolean;
	Data: Data;
}

