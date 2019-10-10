// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.KeyMetadata
export interface KeyMetadata {
	NextRotationDate: string;
	ProtectionLevel: string;
	KeyUsage: string;
	DeleteDate: string;
	AutomaticRotation: string;
	LastRotationDate: string;
	MaterialExpireTime: string;
	RotationInterval: string;
	PrimaryKeyVersion: string;
	Arn: string;
	KeyState: string;
	CreationDate: string;
	Creator: string;
	Origin: string;
	Description: string;
	KeyId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.CreateKeyResponse
export interface CreateKeyResponse {
	RequestId: string;
	KeyMetadata: KeyMetadata;
}

