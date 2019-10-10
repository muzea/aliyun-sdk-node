// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.UisNodeIds
export interface UisNodeIds {
	UisNodeIds: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.UserInfo
export interface UserInfo {
	ClientInfoDB: string;
	ClientInfoDBAccount: string;
	ClientInfoDBPassword: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.Uis
export interface Uis {
	UisId: string;
	CreateTime: number;
	SslClientCertUrl: string;
	Name: string;
	Description: string;
	Status: string;
	UisNodeIds: UisNodeIds;
	UserInfo: UserInfo;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.Uises
export interface Uises {
	Uis: Uis[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.DescribeUisesResponse
export interface DescribeUisesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Uises: Uises;
}

