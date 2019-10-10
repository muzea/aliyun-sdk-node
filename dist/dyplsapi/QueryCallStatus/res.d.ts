// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dyplsapi.SecretCallStatusDTO
export interface SecretCallStatusDTO {
	Status: number;
	CalledNo: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dyplsapi.QueryCallStatusResponse
export interface QueryCallStatusResponse {
	RequestId: string;
	Code: string;
	Message: string;
	SecretCallStatusDTO: SecretCallStatusDTO;
}

