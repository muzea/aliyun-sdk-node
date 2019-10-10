// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dypnsapi.GateVerifyResultDTO
export interface GateVerifyResultDTO {
	VerifyId: string;
	VerifyResult: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dypnsapi.VerifyMobileResponse
export interface VerifyMobileResponse {
	RequestId: string;
	Code: string;
	Message: string;
	GateVerifyResultDTO: GateVerifyResultDTO;
}

