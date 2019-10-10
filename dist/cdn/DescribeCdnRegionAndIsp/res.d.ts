// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.Region
export interface Region {
	NameZh: string;
	NameEn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.Regions
export interface Regions {
	Region: Region[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.Isp
export interface Isp {
	NameZh: string;
	NameEn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.Isps
export interface Isps {
	Isp: Isp[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeCdnRegionAndIspResponse
export interface DescribeCdnRegionAndIspResponse {
	RequestId: string;
	Regions: Regions;
	Isps: Isps;
}

