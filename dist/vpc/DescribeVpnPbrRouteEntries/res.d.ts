// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VpnPbrRouteEntry
export interface VpnPbrRouteEntry {
	VpnInstanceId: string;
	RouteSource: string;
	RouteDest: string;
	NextHop: string;
	Weight: number;
	CreateTime: number;
	State: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VpnPbrRouteEntries
export interface VpnPbrRouteEntries {
	VpnPbrRouteEntry: VpnPbrRouteEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeVpnPbrRouteEntriesResponse
export interface DescribeVpnPbrRouteEntriesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	VpnPbrRouteEntries: VpnPbrRouteEntries;
}

