// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.Key
export interface Key {
	KeyId: string;
	KeyArn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.Keys
export interface Keys {
	Key: Key[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.ListKeysResponse
export interface ListKeysResponse {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	RequestId: string;
	Keys: Keys;
}

