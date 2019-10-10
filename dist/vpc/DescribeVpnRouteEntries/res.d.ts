// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VpnRouteEntry
export interface VpnRouteEntry {
	VpnInstanceId: string;
	RouteDest: string;
	NextHop: string;
	Weight: number;
	CreateTime: number;
	State: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VpnRouteEntries
export interface VpnRouteEntries {
	VpnRouteEntry: VpnRouteEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeVpnRouteEntriesResponse
export interface DescribeVpnRouteEntriesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	VpnRouteEntries: VpnRouteEntries;
}

