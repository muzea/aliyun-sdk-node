// this file was automatically generated, DO NOT EDIT
// structs
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigValueListInDescribeClusterServiceConfigHistory
export interface ConfigValueListInDescribeClusterServiceConfigHistory {
	ConfigValue: ConfigValue[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigInDescribeClusterServiceConfigHistory
export interface ConfigInDescribeClusterServiceConfigHistory {
	ServiceName: string;
	ConfigVersion: string;
	Applied: boolean;
	CreateTime: string;
	Author: string;
	Comment: string;
	ConfigValueList: ConfigValueListInDescribeClusterServiceConfigHistory;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DescribeClusterServiceConfigHistoryResponse
export interface DescribeClusterServiceConfigHistoryResponse {
	RequestId: string;
	Config: ConfigInDescribeClusterServiceConfigHistory;
}

