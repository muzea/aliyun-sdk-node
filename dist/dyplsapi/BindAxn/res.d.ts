// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dyplsapi.SecretBindDTO
export interface SecretBindDTO {
	SubsId: string;
	SecretNo: string;
	Extension: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dyplsapi.BindAxnResponse
export interface BindAxnResponse {
	RequestId: string;
	Code: string;
	Message: string;
	SecretBindDTO: SecretBindDTO;
}

