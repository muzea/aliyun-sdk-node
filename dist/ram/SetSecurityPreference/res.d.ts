// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.MFAPreference
export interface MFAPreference {
	AllowUserToManageMFADevices: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.LoginProfilePreference
export interface LoginProfilePreference {
	LoginNetworkMasks: string;
	LoginSessionDuration: number;
	EnableSaveMFATicket: boolean;
	AllowUserToChangePassword: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.PublicKeyPreference
export interface PublicKeyPreference {
	AllowUserToManagePublicKeys: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.AccessKeyPreference
export interface AccessKeyPreference {
	AllowUserToManageAccessKeys: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.SecurityPreference
export interface SecurityPreference {
	MFAPreference: MFAPreference;
	LoginProfilePreference: LoginProfilePreference;
	PublicKeyPreference: PublicKeyPreference;
	AccessKeyPreference: AccessKeyPreference;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.SetSecurityPreferenceResponse
export interface SetSecurityPreferenceResponse {
	RequestId: string;
	SecurityPreference: SecurityPreference;
}

