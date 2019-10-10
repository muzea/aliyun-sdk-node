// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.AppPolicy
export interface AppPolicy {
	AppId: string;
	CreationTime: string;
	PolicyName: string;
	PolicyType: string;
	PolicyValue: string;
	Description: string;
	ModificationTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.ListAppPoliciesForIdentityResponse
export interface ListAppPoliciesForIdentityResponse {
	RequestId: string;
	AppPolicyList: AppPolicy[];
}

