// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.ConfigOption
export interface ConfigOption {
	MaxValue: number;
	MaxLength: number;
	RegexPattern: string;
	ValueType: string;
	DefaultValue: string;
	RegexDesc: string;
	ValueOptions: string;
	MinLength: number;
	HiddenOption: boolean;
	ReadonlyOption: boolean;
	OptionLabel: string;
	ChangeSeverity: string;
	EditorType: string;
	OptionName: string;
	MinValue: number;
	OptionDescription: string;
	PathName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.ConfigOptionsInDescribeConfigIndex
export interface ConfigOptionsInDescribeConfigIndex {
	ConfigOption: ConfigOption[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.ConfigPath
export interface ConfigPath {
	PathName: string;
	PathLabel: string;
	HiddenPath: boolean;
	ConfigOptions: ConfigOptionsInDescribeConfigIndex;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.ConfigPaths
export interface ConfigPaths {
	ConfigPath: ConfigPath[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.ConfigGroup
export interface ConfigGroup {
	GroupName: string;
	GroupLabel: string;
	ConfigPaths: ConfigPaths;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.ConfigGroups
export interface ConfigGroups {
	ConfigGroup: ConfigGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DescribeConfigIndexResponse
export interface DescribeConfigIndexResponse {
	RequestId: string;
	Code: string;
	Message: string;
	StackId: string;
	StackName: string;
	ConfigGroups: ConfigGroups;
}

