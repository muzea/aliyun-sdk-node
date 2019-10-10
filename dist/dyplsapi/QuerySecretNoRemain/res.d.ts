// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dyplsapi.RemainDTO
export interface RemainDTO {
	City: string;
	Amount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dyplsapi.RemainDTOList
export interface RemainDTOList {
	remainDTO: RemainDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dyplsapi.SecretRemainDTO
export interface SecretRemainDTO {
	City: string;
	Amount: number;
	RemainDTOList: RemainDTOList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dyplsapi.QuerySecretNoRemainResponse
export interface QuerySecretNoRemainResponse {
	RequestId: string;
	Code: string;
	Message: string;
	SecretRemainDTO: SecretRemainDTO;
}

