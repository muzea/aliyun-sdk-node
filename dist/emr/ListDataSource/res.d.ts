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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigListInMetastoreDescribeDataSource
export interface ConfigListInMetastoreDescribeDataSource {
	Config: Config[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DataSource
export interface DataSource {
	Name: string;
	ClusterId: string;
	Capacity: number;
	UsedSize: number;
	CreateFrom: string;
	GmtCreate: number;
	Conf: string;
	SourceType: string;
	Modifier: string;
	ConnectionInfo: string;
	UserId: string;
	Creator: string;
	GmtModified: number;
	ClusterBizId: string;
	ClusterName: string;
	Id: string;
	Status: string;
	Description: string;
	ConfigList: ConfigListInMetastoreDescribeDataSource;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DataSourceListInListDataSource
export interface DataSourceListInListDataSource {
	DataSource: DataSource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListDataSourceResponse
export interface ListDataSourceResponse {
	RequestId: string;
	Total: number;
	PageSize: number;
	PageNumber: number;
	DataSourceList: DataSourceListInListDataSource;
}

