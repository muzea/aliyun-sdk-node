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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.ConfigOptionsInDescribeConfigOptions
export interface ConfigOptionsInDescribeConfigOptions {
	ConfigOption: ConfigOption[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.StackConfigOption
export interface StackConfigOption {
	StackId: string;
	StackName: string;
	ConfigOptions: ConfigOptionsInDescribeConfigOptions;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DescribeConfigOptionsResponse
export interface DescribeConfigOptionsResponse {
	RequestId: string;
	Code: string;
	Message: string;
	StackConfigOption: StackConfigOption;
}

