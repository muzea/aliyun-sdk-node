// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dyplsapi.SecretBindDTO
export interface SecretBindDTO {
	SubsId: string;
	SecretNo: string;
	Extension: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dyplsapi.BindAxnExtensionResponse
export interface BindAxnExtensionResponse {
	RequestId: string;
	Code: string;
	Message: string;
	SecretBindDTO: SecretBindDTO;
}

