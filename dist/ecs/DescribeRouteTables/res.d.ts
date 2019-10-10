// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.NextHop
export interface NextHop {
	NextHopType: string;
	NextHopId: string;
	Enabled: number;
	Weight: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.NextHops
export interface NextHops {
	NextHop: NextHop[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.RouteEntry
export interface RouteEntry {
	RouteTableId: string;
	DestinationCidrBlock: string;
	Type: string;
	Status: string;
	InstanceId: string;
	NextHopType: string;
	NextHops: NextHops;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.RouteEntrys
export interface RouteEntrys {
	RouteEntry: RouteEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.RouteTable
export interface RouteTable {
	VRouterId: string;
	RouteTableId: string;
	RouteTableType: string;
	CreationTime: string;
	ResourceGroupId: string;
	RouteEntrys: RouteEntrys;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.RouteTables
export interface RouteTables {
	RouteTable: RouteTable[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeRouteTablesResponse
export interface DescribeRouteTablesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	RouteTables: RouteTables;
}

