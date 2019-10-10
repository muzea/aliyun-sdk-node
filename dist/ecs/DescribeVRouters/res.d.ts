// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.RouteTableIds
export interface RouteTableIds {
	RouteTableId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.VRouter
export interface VRouter {
	RegionId: string;
	VpcId: string;
	VRouterName: string;
	Description: string;
	VRouterId: string;
	CreationTime: string;
	RouteTableIds: RouteTableIds;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.VRouters
export interface VRouters {
	VRouter: VRouter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeVRoutersResponse
export interface DescribeVRoutersResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	VRouters: VRouters;
}

