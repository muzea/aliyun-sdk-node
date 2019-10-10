// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ContactGroupsInDescribeAlertHistoryList
export interface ContactGroupsInDescribeAlertHistoryList {
	ContactGroup: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ContactsInDescribeAlertHistoryList
export interface ContactsInDescribeAlertHistoryList {
	Contact: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ContactALIIMs
export interface ContactALIIMs {
	ContactALIIM: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ContactSmses
export interface ContactSmses {
	ContactSms: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ContactMails
export interface ContactMails {
	ContactMail: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.AlarmHistory
export interface AlarmHistory {
	RuleId: string;
	AlertName: string;
	GroupId: string;
	Namespace: string;
	MetricName: string;
	Dimensions: string;
	Expression: string;
	EvaluationCount: number;
	Value: string;
	AlertTime: number;
	LastTime: number;
	Level: string;
	RuleName: string;
	AlertState: string;
	Status: number;
	Webhooks: string;
	InstanceName: string;
	ContactGroups: ContactGroupsInDescribeAlertHistoryList;
	Contacts: ContactsInDescribeAlertHistoryList;
	ContactALIIMs: ContactALIIMs;
	ContactSmses: ContactSmses;
	ContactMails: ContactMails;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.AlarmHistoryList
export interface AlarmHistoryList {
	AlarmHistory: AlarmHistory[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeAlertHistoryListResponse
export interface DescribeAlertHistoryListResponse {
	Success: boolean;
	Code: string;
	Message: string;
	Total: string;
	RequestId: string;
	AlarmHistoryList: AlarmHistoryList;
}

