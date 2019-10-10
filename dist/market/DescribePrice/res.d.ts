// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.PromotionRule
export interface PromotionRule {
	RuleId: string;
	Name: string;
	Title: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.PromotionRules
export interface PromotionRules {
	PromotionRule: PromotionRule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.DescribePriceResponse
export interface DescribePriceResponse {
	ProductCode: string;
	OriginalPrice: number;
	TradePrice: number;
	DiscountPrice: number;
	PromotionRules: PromotionRules;
}

