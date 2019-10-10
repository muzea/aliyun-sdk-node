// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.PolicyDTO
export interface PolicyDTO {
	Name: string;
	GmtCreate: string;
	Effect: string;
	Action: string;
	Conditions: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DataInQueryUserPolicies
export interface DataInQueryUserPolicies {
	policyDTO: PolicyDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.QueryUserPoliciesResponse
export interface QueryUserPoliciesResponse {
	Paging: boolean;
	RequestId: string;
	Data: DataInQueryUserPolicies;
}

