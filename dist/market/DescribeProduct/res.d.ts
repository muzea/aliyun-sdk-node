// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Telephones
export interface Telephones {
	Telephone: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.WangWang
export interface WangWang {
	UserName: string;
	Remark: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.WangWangs
export interface WangWangs {
	WangWang: WangWang[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.ShopInfo
export interface ShopInfo {
	Id: number;
	Name: string;
	Emails: string;
	Telephones: Telephones;
	WangWangs: WangWangs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.OrderPeriod
export interface OrderPeriod {
	Name: string;
	PeriodType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.OrderPeriods
export interface OrderPeriods {
	OrderPeriod: OrderPeriod[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.PropertyValue
export interface PropertyValue {
	Value: string;
	Min: string;
	Remark: string;
	Max: string;
	Step: string;
	DisplayName: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.PropertyValuesInDescribeProduct
export interface PropertyValuesInDescribeProduct {
	PropertyValue: PropertyValue[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Property
export interface Property {
	Name: string;
	Key: string;
	ShowType: string;
	DisplayUnit: string;
	PropertyValues: PropertyValuesInDescribeProduct;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.PropertiesInDescribeProduct
export interface PropertiesInDescribeProduct {
	Property: Property[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Module
export interface Module {
	Name: string;
	Code: string;
	Id: string;
	Properties: PropertiesInDescribeProduct;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.ModulesInDescribeProduct
export interface ModulesInDescribeProduct {
	Module: Module[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.ProductSku
export interface ProductSku {
	Name: string;
	Code: string;
	ChargeType: string;
	Constraints: string;
	Hidden: boolean;
	OrderPeriods: OrderPeriods;
	Modules: ModulesInDescribeProduct;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.ProductSkus
export interface ProductSkus {
	ProductSku: ProductSku[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.ProductExtra
export interface ProductExtra {
	Key: string;
	Values: string;
	Label: string;
	Order: number;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.ProductExtras
export interface ProductExtras {
	ProductExtra: ProductExtra[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.DescribeProductResponse
export interface DescribeProductResponse {
	Code: string;
	Name: string;
	Type: string;
	PicUrl: string;
	Description: string;
	ShortDescription: string;
	UseCount: number;
	Score: number;
	Status: string;
	AuditStatus: string;
	AuditFailMsg: string;
	AuditTime: number;
	GmtCreated: number;
	GmtModified: number;
	ShopInfo: ShopInfo;
	ProductSkus: ProductSkus;
	ProductExtras: ProductExtras;
}

