// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.LoginProfile
export interface LoginProfile {
	MFABindRequired: boolean;
	CreateDate: string;
	UserName: string;
	PasswordResetRequired: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.GetLoginProfileResponse
export interface GetLoginProfileResponse {
	RequestId: string;
	LoginProfile: LoginProfile;
}

