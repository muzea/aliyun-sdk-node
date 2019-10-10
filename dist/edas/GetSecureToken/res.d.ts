// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.SecureToken
export interface SecureToken {
	Id: number;
	UserId: string;
	EdasId: string;
	RegionId: string;
	RegionName: string;
	Description: string;
	BelongRegion: string;
	AccessKey: string;
	SecretKey: string;
	TenantId: string;
	AddressServerHost: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.GetSecureTokenResponse
export interface GetSecureTokenResponse {
	Code: number;
	Message: string;
	RequestId: string;
	SecureToken: SecureToken;
}

