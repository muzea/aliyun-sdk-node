// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ContactFlowVersion
export interface ContactFlowVersion {
	Canvas: string;
	Content: string;
	LockedBy: string;
	ContactFlowVersionDescription: string;
	Version: string;
	LastModified: string;
	LastModifiedBy: string;
	Status: string;
	ContactFlowVersionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.VersionsInListContactFlows
export interface VersionsInListContactFlows {
	ContactFlowVersion: ContactFlowVersion[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.PhoneNumbersInListVoiceAppraise
export interface PhoneNumbersInListVoiceAppraise {
	PhoneNumber: PhoneNumber[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ContactFlow
export interface ContactFlow {
	ContactFlowDescription: string;
	InstanceId: string;
	ContactFlowName: string;
	ContactFlowId: string;
	AppliedVersion: string;
	Type: string;
	Versions: VersionsInListContactFlows;
	PhoneNumbers: PhoneNumbersInListVoiceAppraise;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.PrivacyNumber
export interface PrivacyNumber {
	PoolId: string;
	BizId: string;
	RegionNameCity: string;
	TelX: string;
	PhoneNumber: string;
	PoolName: string;
	Extra: string;
	SubId: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.OutboundPhoneNumbersInListSkillGroups
export interface OutboundPhoneNumbersInListSkillGroups {
	PhoneNumber: PhoneNumber[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.SkillGroup
export interface SkillGroup {
	SkillGroupName: string;
	AccQueueName: string;
	SkillGroupId: string;
	SkillGroupDescription: string;
	RoutingStrategy: string;
	InstanceId: string;
	AccSkillGroupName: string;
	UserCount: number;
	OutboundPhoneNumbers: OutboundPhoneNumbersInListSkillGroups;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.SkillGroupsInAddBulkPhoneNumbers
export interface SkillGroupsInAddBulkPhoneNumbers {
	SkillGroup: SkillGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.PhoneNumber
export interface PhoneNumber {
	Usage: string;
	Trunks: number;
	PrivateFlag: boolean;
	City: string;
	Number: string;
	Province: string;
	Assignee: string;
	InstanceId: string;
	RemainingTime: number;
	NumberCommodityStatus: number;
	TestOnly: boolean;
	PhoneNumberDescription: string;
	AllowOutbound: boolean;
	SipTelX: string;
	PhoneNumberId: string;
	ContactFlow: ContactFlow;
	PrivacyNumber: PrivacyNumber;
	SkillGroups: SkillGroupsInAddBulkPhoneNumbers;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.AddPhoneNumberResponse
export interface AddPhoneNumberResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	PhoneNumber: PhoneNumber;
}

