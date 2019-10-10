// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Rule
export interface Rule {
	RuleId: number;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SubRulesInDescribePrice
export interface SubRulesInDescribePrice {
	Rule: Rule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ResourcePriceModel
export interface ResourcePriceModel {
	DiscountPrice: number;
	TradePrice: number;
	OriginalPrice: number;
	Resource: string;
	SubRules: SubRulesInDescribePrice;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DetailInfosInDescribePrice
export interface DetailInfosInDescribePrice {
	ResourcePriceModel: ResourcePriceModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Price
export interface Price {
	DiscountPrice: number;
	TradePrice: number;
	OriginalPrice: number;
	ReservedInstanceHourPrice: number;
	Currency: string;
	DetailInfos: DetailInfosInDescribePrice;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.RulesInDescribePrice
export interface RulesInDescribePrice {
	Rule: Rule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.PriceInfo
export interface PriceInfo {
	Price: Price;
	Rules: RulesInDescribePrice;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribePriceResponse
export interface DescribePriceResponse {
	RequestId: string;
	PriceInfo: PriceInfo;
}

