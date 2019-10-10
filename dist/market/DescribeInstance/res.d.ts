// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.RelationalData
export interface RelationalData {
	ServiceStatus: string;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.ModulesInDescribeInstance
export interface ModulesInDescribeInstance {
	Module: Module[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.DescribeInstanceResponse
export interface DescribeInstanceResponse {
	InstanceId: number;
	OrderId: number;
	SupplierName: string;
	ProductCode: string;
	ProductSkuCode: string;
	ProductName: string;
	ProductType: string;
	Status: string;
	BeganOn: number;
	EndOn: number;
	CreatedOn: number;
	ExtendJson: string;
	HostJson: string;
	AppJson: string;
	ComponentJson: string;
	Constraints: string;
	RelationalData: RelationalData;
	Modules: ModulesInDescribeInstance;
}

