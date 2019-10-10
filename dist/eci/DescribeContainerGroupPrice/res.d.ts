// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupPriceRule2
export interface DescribeContainerGroupPriceRule2 {
	RuleId: number;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupPriceRules1
export interface DescribeContainerGroupPriceRules1 {
	Rule: DescribeContainerGroupPriceRule2[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupPriceRule5
export interface DescribeContainerGroupPriceRule5 {
	RuleId: number;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupPriceRules4
export interface DescribeContainerGroupPriceRules4 {
	Rule: DescribeContainerGroupPriceRule5[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupPriceDetailInfo3
export interface DescribeContainerGroupPriceDetailInfo3 {
	Resource: string;
	OriginalPrice: number;
	DiscountPrice: number;
	TradePrice: number;
	Rules: DescribeContainerGroupPriceRules4;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupPriceDetailInfos2
export interface DescribeContainerGroupPriceDetailInfos2 {
	DetailInfo: DescribeContainerGroupPriceDetailInfo3[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupPricePrice1
export interface DescribeContainerGroupPricePrice1 {
	OriginalPrice: number;
	DiscountPrice: number;
	TradePrice: number;
	Currency: string;
	DetailInfos: DescribeContainerGroupPriceDetailInfos2;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupPricePriceInfo0
export interface DescribeContainerGroupPricePriceInfo0 {
	Rules: DescribeContainerGroupPriceRules1;
	Price: DescribeContainerGroupPricePrice1;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupPriceResponse
export interface DescribeContainerGroupPriceResponse {
	RequestId: string;
	PriceInfo: DescribeContainerGroupPricePriceInfo0;
}

