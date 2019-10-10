// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.SuccessListInConfirmTransferInEmail
export interface SuccessListInConfirmTransferInEmail {
	SuccessDomain: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.FailListInConfirmTransferInEmail
export interface FailListInConfirmTransferInEmail {
	FailDomain: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.ConfirmTransferInEmailResponse
export interface ConfirmTransferInEmailResponse {
	RequestId: string;
	SuccessList: SuccessListInConfirmTransferInEmail;
	FailList: FailListInConfirmTransferInEmail;
}

