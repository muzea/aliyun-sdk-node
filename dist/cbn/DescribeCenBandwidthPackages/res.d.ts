// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.CenIds
export interface CenIds {
	CenId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.CenBandwidthPackage
export interface CenBandwidthPackage {
	CenBandwidthPackageId: string;
	Name: string;
	Description: string;
	Bandwidth: number;
	BandwidthPackageChargeType: string;
	GeographicRegionAId: string;
	GeographicRegionBId: string;
	GeographicSpanId: string;
	BusinessStatus: string;
	CreationTime: string;
	ExpiredTime: string;
	Status: string;
	IsCrossBorder: boolean;
	CenIds: CenIds;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.CenBandwidthPackages
export interface CenBandwidthPackages {
	CenBandwidthPackage: CenBandwidthPackage[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.DescribeCenBandwidthPackagesResponse
export interface DescribeCenBandwidthPackagesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	CenBandwidthPackages: CenBandwidthPackages;
}

