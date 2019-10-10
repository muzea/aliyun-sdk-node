// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.PasswordPolicy
export interface PasswordPolicy {
	RequireUppercaseCharacters: boolean;
	MaxPasswordAge: number;
	RequireSymbols: boolean;
	RequireLowercaseCharacters: boolean;
	PasswordReusePrevention: number;
	HardExpiry: boolean;
	MaxLoginAttemps: number;
	MinimumPasswordLength: number;
	RequireNumbers: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.SetPasswordPolicyResponse
export interface SetPasswordPolicyResponse {
	RequestId: string;
	PasswordPolicy: PasswordPolicy;
}

