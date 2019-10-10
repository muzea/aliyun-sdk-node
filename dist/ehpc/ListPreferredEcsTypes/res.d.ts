// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ManagerInListPreferredEcsTypes
export interface ManagerInListPreferredEcsTypes {
	InstanceTypeId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.LoginInListPreferredEcsTypes
export interface LoginInListPreferredEcsTypes {
	InstanceTypeId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ComputeInListPreferredEcsTypes
export interface ComputeInListPreferredEcsTypes {
	InstanceTypeId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Roles
export interface Roles {
	Manager: ManagerInListPreferredEcsTypes;
	Login: LoginInListPreferredEcsTypes;
	Compute: ComputeInListPreferredEcsTypes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.SeriesInfo
export interface SeriesInfo {
	SeriesId: string;
	SeriesName: string;
	Roles: Roles;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Series
export interface Series {
	SeriesInfo: SeriesInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListPreferredEcsTypesResponse
export interface ListPreferredEcsTypesResponse {
	RequestId: string;
	SupportSpotInstance: boolean;
	Series: Series;
}

