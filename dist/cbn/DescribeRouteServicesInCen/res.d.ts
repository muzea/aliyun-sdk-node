// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.Cidrs
export interface Cidrs {
	Cidr: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.RouteServiceEntry
export interface RouteServiceEntry {
	CenId: string;
	Host: string;
	HostRegionId: string;
	AccessRegionId: string;
	UpdateInterval: string;
	Status: string;
	Cidrs: Cidrs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.RouteServiceEntries
export interface RouteServiceEntries {
	RouteServiceEntry: RouteServiceEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.DescribeRouteServicesInCenResponse
export interface DescribeRouteServicesInCenResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	RouteServiceEntries: RouteServiceEntries;
}

