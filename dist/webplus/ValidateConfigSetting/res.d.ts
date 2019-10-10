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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.ConfigValidationResult
export interface ConfigValidationResult {
	PathName: string;
	OptionName: string;
	ResultSeverity: string;
	ResultMessage: string;
	ConfigOption: ConfigOption;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.ConfigValidationResults
export interface ConfigValidationResults {
	ConfigValidationResult: ConfigValidationResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.ValidateConfigSettingResponse
export interface ValidateConfigSettingResponse {
	RequestId: string;
	Code: string;
	Message: string;
	ConfigValidationResults: ConfigValidationResults;
}

