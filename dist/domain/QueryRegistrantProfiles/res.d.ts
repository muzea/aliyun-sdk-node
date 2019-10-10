// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.RegistrantProfile
export interface RegistrantProfile {
	RegistrantProfileId: number;
	CreateTime: string;
	UpdateTime: string;
	DefaultRegistrantProfile: boolean;
	RegistrantName: string;
	RegistrantOrganization: string;
	Country: string;
	Province: string;
	City: string;
	Address: string;
	Email: string;
	PostalCode: string;
	TelArea: string;
	Telephone: string;
	TelExt: string;
	EmailVerificationStatus: number;
	ZhRegistrantName: string;
	ZhRegistrantOrganization: string;
	ZhProvince: string;
	ZhCity: string;
	ZhAddress: string;
	RegistrantType: string;
	RealNameStatus: string;
	RegistrantProfileType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.RegistrantProfiles
export interface RegistrantProfiles {
	RegistrantProfile: RegistrantProfile[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryRegistrantProfilesResponse
export interface QueryRegistrantProfilesResponse {
	RequestId: string;
	TotalItemNum: number;
	CurrentPageNum: number;
	TotalPageNum: number;
	PageSize: number;
	PrePage: boolean;
	NextPage: boolean;
	RegistrantProfiles: RegistrantProfiles;
}

