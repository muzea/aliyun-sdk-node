// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.SendResult
export interface SendResult {
	Message: string;
	Email: string;
	Code: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.ResendEmailVerificationResponse
export interface ResendEmailVerificationResponse {
	RequestId: string;
	SuccessList: SendResult[];
	FailList: SendResult[];
}

