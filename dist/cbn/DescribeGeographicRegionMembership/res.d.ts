// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.RegionId
export interface RegionId {
	RegionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.RegionIds
export interface RegionIds {
	RegionId: RegionId[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.DescribeGeographicRegionMembershipResponse
export interface DescribeGeographicRegionMembershipResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	RegionIds: RegionIds;
}

