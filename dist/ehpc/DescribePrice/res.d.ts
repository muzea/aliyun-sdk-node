// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.PriceInfo
export interface PriceInfo {
	NodeType: string;
	OriginalPrice: number;
	TradePrice: number;
	Currency: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Prices
export interface Prices {
	PriceInfo: PriceInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.DescribePriceResponse
export interface DescribePriceResponse {
	RequestId: string;
	TotalTradePrice: number;
	Prices: Prices;
}

