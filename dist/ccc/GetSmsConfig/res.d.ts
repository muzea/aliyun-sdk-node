// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.SmsConfig
export interface SmsConfig {
	Id: number;
	Instance: string;
	SignName: string;
	TemplateCode: string;
	Scenario: number;
	Name: string;
	Description: string;
	Extra: string;
	GmtCreate: string;
	GmtModified: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.SmsConfigs
export interface SmsConfigs {
	SmsConfig: SmsConfig[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.GetSmsConfigResponse
export interface GetSmsConfigResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	SmsConfigs: SmsConfigs;
}

