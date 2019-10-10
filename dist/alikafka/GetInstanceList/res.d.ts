// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.UpgradeServiceDetailInfoVO
export interface UpgradeServiceDetailInfoVO {
	Current2OpenSourceVersion: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.UpgradeServiceDetailInfo
export interface UpgradeServiceDetailInfo {
	UpgradeServiceDetailInfoVO: UpgradeServiceDetailInfoVO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.InstanceVO
export interface InstanceVO {
	InstanceId: string;
	RegionId: string;
	ServiceStatus: number;
	VpcId: string;
	VSwitchId: string;
	EndPoint: string;
	CreateTime: number;
	ExpiredTime: number;
	DeployType: number;
	SslEndPoint: string;
	Name: string;
	UpgradeServiceDetailInfo: UpgradeServiceDetailInfo;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.InstanceList
export interface InstanceList {
	InstanceVO: InstanceVO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.GetInstanceListResponse
export interface GetInstanceListResponse {
	Success: boolean;
	RequestId: string;
	Code: number;
	Message: string;
	InstanceList: InstanceList;
}

