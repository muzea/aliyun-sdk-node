// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dyplsapi.SecretBuyInfoDTO
export interface SecretBuyInfoDTO {
	SecretNo: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dyplsapi.BuySecretNoResponse
export interface BuySecretNoResponse {
	RequestId: string;
	Code: string;
	Message: string;
	SecretBuyInfoDTO: SecretBuyInfoDTO;
}

