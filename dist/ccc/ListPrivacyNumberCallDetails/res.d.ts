// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.PrivacyNumberCallDetail
export interface PrivacyNumberCallDetail {
	AgentId: string;
	AgentName: string;
	ContactId: string;
	CallingNumber: string;
	CalledNumber: string;
	PrivacyNumber: string;
	ContactType: string;
	Result: string;
	Description: string;
	CallTime: number;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListInListPrivacyNumberCallDetails
export interface ListInListPrivacyNumberCallDetails {
	PrivacyNumberCallDetail: PrivacyNumberCallDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.PrivacyNumberCallDetails
export interface PrivacyNumberCallDetails {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	List: ListInListPrivacyNumberCallDetails;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListPrivacyNumberCallDetailsResponse
export interface ListPrivacyNumberCallDetailsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	PrivacyNumberCallDetails: PrivacyNumberCallDetails;
}

