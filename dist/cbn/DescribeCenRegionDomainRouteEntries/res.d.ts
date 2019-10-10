// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.CenRouteEntry
export interface CenRouteEntry {
	DestinationCidrBlock: string;
	Type: string;
	NextHopInstanceId: string;
	NextHopType: string;
	NextHopRegionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.CenRouteEntries
export interface CenRouteEntries {
	CenRouteEntry: CenRouteEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.DescribeCenRegionDomainRouteEntriesResponse
export interface DescribeCenRegionDomainRouteEntriesResponse {
	RequestId: string;
	PageNumber: number;
	TotalCount: number;
	PageSize: number;
	CenRouteEntries: CenRouteEntries;
}

