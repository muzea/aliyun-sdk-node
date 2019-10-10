// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dyplsapi.SecretBindDetailDTO
export interface SecretBindDetailDTO {
	SubsId: string;
	PhoneNoA: string;
	PhoneNoX: string;
	PhoneNoB: string;
	Extension: string;
	GroupId: number;
	GmtCreate: string;
	ExpireDate: string;
	NeedRecord: boolean;
	CallRestrict: string;
	Status: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dyplsapi.QuerySubscriptionDetailResponse
export interface QuerySubscriptionDetailResponse {
	RequestId: string;
	Code: string;
	Message: string;
	SecretBindDetailDTO: SecretBindDetailDTO;
}

