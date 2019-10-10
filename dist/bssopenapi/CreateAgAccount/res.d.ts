// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.AgRelationDto
export interface AgRelationDto {
	Pk: string;
	Type: string;
	Mpk: string;
	RamAdminRoleName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.CreateAgAccountResponse
export interface CreateAgAccountResponse {
	RequestId: string;
	Code: string;
	Message: string;
	Success: boolean;
	AgRelationDto: AgRelationDto;
}

