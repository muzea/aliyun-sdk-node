// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sts.Credentials
export interface Credentials {
	AccessKeySecret: string;
	Expiration: string;
	AccessKeyId: string;
	SecurityToken: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sts.AssumedRoleUser
export interface AssumedRoleUser {
	AssumedRoleId: string;
	Arn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sts.SAMLAssertionInfo
export interface SAMLAssertionInfo {
	SubjectType: string;
	Subject: string;
	Recipient: string;
	Issuer: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sts.AssumeRoleWithSAMLResponse
export interface AssumeRoleWithSAMLResponse {
	RequestId: string;
	Credentials: Credentials;
	AssumedRoleUser: AssumedRoleUser;
	SAMLAssertionInfo: SAMLAssertionInfo;
}

