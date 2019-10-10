// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.CenBandwidthPackageIds
export interface CenBandwidthPackageIds {
	CenBandwidthPackageId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.Tag
export interface Tag {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.Tags
export interface Tags {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.Cen
export interface Cen {
	CenId: string;
	Name: string;
	Description: string;
	ProtectionLevel: string;
	Status: string;
	CreationTime: string;
	CenBandwidthPackageIds: CenBandwidthPackageIds;
	Tags: Tags;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.Cens
export interface Cens {
	Cen: Cen[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.DescribeCensResponse
export interface DescribeCensResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Cens: Cens;
}

