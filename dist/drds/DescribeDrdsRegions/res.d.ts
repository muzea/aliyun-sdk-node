// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.Region
export interface Region {
	RegionId: string;
	RegionName: string;
	RegionEndpoint: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.Regions
export interface Regions {
	Region: Region[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeDrdsRegionsResponse
export interface DescribeDrdsRegionsResponse {
	RequestId: string;
	Regions: Regions;
}

