// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.FailRecord
export interface FailRecord {
	Date: string;
	FailReason: string;
	DomainNameVerificationStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryFailReasonForRegistrantProfileRealNameVerificationResponse
export interface QueryFailReasonForRegistrantProfileRealNameVerificationResponse {
	RequestId: string;
	Data: FailRecord[];
}

