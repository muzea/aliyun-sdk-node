// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Contact
export interface Contact {
	ContactName: string;
	JobId: string;
	PhoneNumber: string;
	State: string;
	Role: string;
	ContactId: string;
	Honorific: string;
	ReferenceId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.UnreachableContact
export interface UnreachableContact {
	TotalAttempts: number;
	Contacts: Contact[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.UnreachableContacts
export interface UnreachableContacts {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	List: UnreachableContact[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListUnreachableContactsResponse
export interface ListUnreachableContactsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	UnreachableContacts: UnreachableContacts;
}

