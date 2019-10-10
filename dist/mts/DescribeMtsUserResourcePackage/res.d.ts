// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ResourcePackageInfo
export interface ResourcePackageInfo {
	CurrCapacity: string;
	InitCapacity: string;
	CommodityCode: string;
	DisplayName: string;
	InstanceId: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ResourcePackageInfos
export interface ResourcePackageInfos {
	ResourcePackageInfo: ResourcePackageInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.DescribeMtsUserResourcePackageResponse
export interface DescribeMtsUserResourcePackageResponse {
	RequestId: string;
	ResourcePackageInfos: ResourcePackageInfos;
}

