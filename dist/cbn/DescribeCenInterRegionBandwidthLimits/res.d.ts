// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.CenInterRegionBandwidthLimit
export interface CenInterRegionBandwidthLimit {
	CenId: string;
	LocalRegionId: string;
	OppositeRegionId: string;
	GeographicSpanId: string;
	BandwidthLimit: number;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.CenInterRegionBandwidthLimits
export interface CenInterRegionBandwidthLimits {
	CenInterRegionBandwidthLimit: CenInterRegionBandwidthLimit[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.DescribeCenInterRegionBandwidthLimitsResponse
export interface DescribeCenInterRegionBandwidthLimitsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	CenInterRegionBandwidthLimits: CenInterRegionBandwidthLimits;
}

