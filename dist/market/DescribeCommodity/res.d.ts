// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Commodity
export interface Commodity {
	CommodityId: string;
	ApplicationId: string;
	CommoditySpecs: string;
	Properties: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.DescribeCommodityResponse
export interface DescribeCommodityResponse {
	RequestId: string;
	Success: boolean;
	Commodity: Commodity;
}

