// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.ResourcePackageInfo
export interface ResourcePackageInfo {
	CurrCapacity: string;
	InitCapacity: string;
	CommodityCode: string;
	DisplayName: string;
	InstanceId: string;
	Status: string;
	StartTime: string;
	EndTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.ResourcePackageInfos
export interface ResourcePackageInfos {
	ResourcePackageInfo: ResourcePackageInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeCdnUserResourcePackageResponse
export interface DescribeCdnUserResourcePackageResponse {
	RequestId: string;
	ResourcePackageInfos: ResourcePackageInfos;
}

