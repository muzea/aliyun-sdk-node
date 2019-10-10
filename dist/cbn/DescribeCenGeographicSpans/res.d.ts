// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.GeographicSpanModel
export interface GeographicSpanModel {
	GeographicSpanId: string;
	LocalGeoRegionId: string;
	OppositeGeoRegionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.GeographicSpanModels
export interface GeographicSpanModels {
	GeographicSpanModel: GeographicSpanModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.DescribeCenGeographicSpansResponse
export interface DescribeCenGeographicSpansResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	GeographicSpanModels: GeographicSpanModels;
}

