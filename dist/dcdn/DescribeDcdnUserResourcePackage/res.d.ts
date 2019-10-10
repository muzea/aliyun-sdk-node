// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.ResourcePackageInfo
export interface ResourcePackageInfo {
	CurrCapacity: string;
	InitCapacity: string;
	CommodityCode: string;
	DisplayName: string;
	TemplateName: string;
	InstanceId: string;
	Status: string;
	StartTime: string;
	EndTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.ResourcePackageInfos
export interface ResourcePackageInfos {
	ResourcePackageInfo: ResourcePackageInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnUserResourcePackageResponse
export interface DescribeDcdnUserResourcePackageResponse {
	RequestId: string;
	ResourcePackageInfos: ResourcePackageInfos;
}

