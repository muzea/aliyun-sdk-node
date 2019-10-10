// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.PolicyVersion
export interface PolicyVersion {
	VersionId: string;
	PolicyDocument: string;
	CreateDate: string;
	IsDefaultVersion: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.GetPolicyVersionResponse
export interface GetPolicyVersionResponse {
	RequestId: string;
	PolicyVersion: PolicyVersion;
}

