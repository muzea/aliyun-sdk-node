// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.Policy
export interface Policy {
	PolicyDocument: string;
	AttachDate: string;
	CreateDate: string;
	PolicyType: string;
	UpdateDate: string;
	AttachmentCount: number;
	PolicyName: string;
	DefaultVersion: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.CreatePolicyResponse
export interface CreatePolicyResponse {
	RequestId: string;
	Policy: Policy;
}

