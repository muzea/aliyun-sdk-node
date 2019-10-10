// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ContactIdentity
export interface ContactIdentity {
	JobGroupId: string;
	ContactReferrnceId: string;
	UserPhone: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.GetContactIdentifyByOutBoundTaskIdResponse
export interface GetContactIdentifyByOutBoundTaskIdResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	ContactIdentity: ContactIdentity;
}

