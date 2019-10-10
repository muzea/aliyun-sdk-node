// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.ConfigSetting
export interface ConfigSetting {
	PathName: string;
	OptionName: string;
	SettingValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.ConfigSettings
export interface ConfigSettings {
	ConfigSetting: ConfigSetting[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DescribeConfigSettingsResponse
export interface DescribeConfigSettingsResponse {
	RequestId: string;
	Code: string;
	Message: string;
	ConfigSettings: ConfigSettings;
}

