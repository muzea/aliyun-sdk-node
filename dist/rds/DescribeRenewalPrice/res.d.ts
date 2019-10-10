// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.RuleIdsInDescribeRenewalPrice
export interface RuleIdsInDescribeRenewalPrice {
	RuleId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ActivityInfo
export interface ActivityInfo {
	Success: string;
	CheckErrMsg: string;
	ErrorCode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.Coupon
export interface Coupon {
	Name: string;
	CouponNo: string;
	IsSelected: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.CouponsInDescribeRenewalPrice
export interface CouponsInDescribeRenewalPrice {
	Coupon: Coupon[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.PriceInfo
export interface PriceInfo {
	TradePrice: number;
	DiscountPrice: number;
	OriginalPrice: number;
	Currency: string;
	RuleIds: RuleIdsInDescribeRenewalPrice;
	ActivityInfo: ActivityInfo;
	Coupons: CouponsInDescribeRenewalPrice;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.Rule
export interface Rule {
	Name: string;
	RuleId: number;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.RulesInDescribeRenewalPrice
export interface RulesInDescribeRenewalPrice {
	Rule: Rule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeRenewalPriceResponse
export interface DescribeRenewalPriceResponse {
	RequestId: string;
	PriceInfo: PriceInfo;
	Rules: RulesInDescribeRenewalPrice;
}

