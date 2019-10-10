// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Channels
export interface Channels {
	AliIM: string;
	Mail: string;
	SMS: string;
	DingWebHook: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Contact
export interface Contact {
	Name: string;
	Message: string;
	Success: string;
	Code: string;
	Desc: string;
	UpdateTime: number;
	RequestId: string;
	RuleId: string;
	CreateTime: number;
	Channels: Channels;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.AttachAlertResult
export interface AttachAlertResult {
	Contact: Contact[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Data
export interface Data {
	SiteMonitorVersion: string;
	SiteMonitorIdcQuota: number;
	SiteMonitorOperatorQuotaQuota: number;
	SiteMonitorTaskQuota: number;
	SiteMonitorQuotaTaskUsed: number;
	AttachAlertResult: AttachAlertResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeSiteMonitorQuotaResponse
export interface DescribeSiteMonitorQuotaResponse {
	Code: string;
	Message: string;
	Success: string;
	RequestId: string;
	Data: Data;
}

