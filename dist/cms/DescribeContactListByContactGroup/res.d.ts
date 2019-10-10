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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ContactsInDescribeContactListByContactGroup
export interface ContactsInDescribeContactListByContactGroup {
	Contact: Contact[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeContactListByContactGroupResponse
export interface DescribeContactListByContactGroupResponse {
	Success: boolean;
	Code: string;
	Message: string;
	RequestId: string;
	Contacts: ContactsInDescribeContactListByContactGroup;
}

