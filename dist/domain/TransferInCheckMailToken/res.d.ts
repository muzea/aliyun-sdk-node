// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.SuccessListInTransferInCheckMailToken
export interface SuccessListInTransferInCheckMailToken {
	SuccessDomain: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.FailListInTransferInCheckMailToken
export interface FailListInTransferInCheckMailToken {
	FailDomain: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.TransferInCheckMailTokenResponse
export interface TransferInCheckMailTokenResponse {
	RequestId: string;
	SuccessList: SuccessListInTransferInCheckMailToken;
	FailList: FailListInTransferInCheckMailToken;
}

