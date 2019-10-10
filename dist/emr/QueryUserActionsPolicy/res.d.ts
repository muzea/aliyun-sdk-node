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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DataInQueryUserActionsPolicy
export interface DataInQueryUserActionsPolicy {
	policyDTO: PolicyDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.QueryUserActionsPolicyResponse
export interface QueryUserActionsPolicyResponse {
	Paging: boolean;
	RequestId: string;
	Data: DataInQueryUserActionsPolicy;
}

