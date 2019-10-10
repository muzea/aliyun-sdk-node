// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.PropertyTypesInDescribeClusterServiceConfigForAdmin
export interface PropertyTypesInDescribeClusterServiceConfigForAdmin {
	propertyType: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EffectWay
export interface EffectWay {
	InvokeServiceName: string;
	EffectType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ValueEntryInfo
export interface ValueEntryInfo {
	Value: string;
	Label: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EntriesInDescribeClusterServiceConfigForAdmin
export interface EntriesInDescribeClusterServiceConfigForAdmin {
	ValueEntryInfo: ValueEntryInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.PropertyValueAttributes
export interface PropertyValueAttributes {
	Unit: string;
	Hidden: boolean;
	Maximum: string;
	Mimimum: string;
	IncrememtStep: string;
	Type: string;
	ReadOnly: boolean;
	Entries: EntriesInDescribeClusterServiceConfigForAdmin;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.PropertyInfo
export interface PropertyInfo {
	Name: string;
	Value: string;
	Component: string;
	Description: string;
	FileName: string;
	ServiceName: string;
	DisplayName: string;
	PropertyTypes: PropertyTypesInDescribeClusterServiceConfigForAdmin;
	EffectWay: EffectWay;
	PropertyValueAttributes: PropertyValueAttributes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.PropertyInfoListInDescribeClusterServiceConfigForAdmin
export interface PropertyInfoListInDescribeClusterServiceConfigForAdmin {
	PropertyInfo: PropertyInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigItemValue
export interface ConfigItemValue {
	ChangeType: string;
	Value: string;
	OldValue: string;
	IsCustom: boolean;
	Description: string;
	ItemName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigItemValueListInDescribeClusterServiceConfigForAdmin
export interface ConfigItemValueListInDescribeClusterServiceConfigForAdmin {
	ConfigItemValue: ConfigItemValue[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigValue
export interface ConfigValue {
	ConfigName: string;
	AllowCustom: boolean;
	ConfigItemValueList: ConfigItemValueListInDescribeClusterServiceConfigForAdmin;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigValueListInDescribeClusterServiceConfigForAdmin
export interface ConfigValueListInDescribeClusterServiceConfigForAdmin {
	ConfigValue: ConfigValue[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Config
export interface Config {
	Author: string;
	CreateTime: string;
	ConfigName: string;
	ConfigValue: string;
	ConfigVersion: string;
	Applied: string;
	Replace: string;
	Comment: string;
	Value: string;
	ConfigKey: string;
	ServiceName: string;
	FileName: string;
	Encrypt: string;
	PropertyInfoList: PropertyInfoListInDescribeClusterServiceConfigForAdmin;
	ConfigValueList: ConfigValueListInDescribeClusterServiceConfigForAdmin;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DescribeClusterServiceConfigResponse
export interface DescribeClusterServiceConfigResponse {
	RequestId: string;
	Config: Config;
}

