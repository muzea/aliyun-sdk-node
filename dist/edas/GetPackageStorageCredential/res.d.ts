// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.Credential
export interface Credential {
	AccessKeyId: string;
	AccessKeySecret: string;
	Bucket: string;
	Expiration: string;
	KeyPrefix: string;
	RegionId: string;
	SecurityToken: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.GetPackageStorageCredentialResponse
export interface GetPackageStorageCredentialResponse {
	RequestId: string;
	Code: number;
	Message: string;
	Credential: Credential;
}

