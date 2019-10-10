// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.RuleIdsInDescribeRenewalPrice
export interface RuleIdsInDescribeRenewalPrice {
	RuleId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Coupon
export interface Coupon {
	CouponNo: string;
	Name: string;
	Description: string;
	IsSelected: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Coupons
export interface Coupons {
	Coupon: Coupon[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Order
export interface Order {
	OriginalAmount: number;
	TradeAmount: number;
	DiscountAmount: number;
	Currency: string;
	RuleIds: RuleIdsInDescribeRenewalPrice;
	Coupons: Coupons;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Rule
export interface Rule {
	RuleDescId: number;
	Name: string;
	Title: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Rules
export interface Rules {
	Rule: Rule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.SubOrder
export interface SubOrder {
	OriginalAmount: number;
	TradeAmount: number;
	DiscountAmount: number;
	InstanceId: string;
	RuleIds: RuleIdsInDescribeRenewalPrice;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.SubOrders
export interface SubOrders {
	SubOrder: SubOrder[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeRenewalPriceResponse
export interface DescribeRenewalPriceResponse {
	RequestId: string;
	Order: Order;
	Rules: Rules;
	SubOrders: SubOrders;
}

