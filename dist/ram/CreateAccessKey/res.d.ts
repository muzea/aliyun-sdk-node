// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.AccessKey
export interface AccessKey {
	AccessKeySecret: string;
	CreateDate: string;
	Status: string;
	AccessKeyId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.CreateAccessKeyResponse
export interface CreateAccessKeyResponse {
	RequestId: string;
	AccessKey: AccessKey;
}

