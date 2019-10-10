// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.RouteConflict
export interface RouteConflict {
	DestinationCidrBlock: string;
	RegionId: string;
	InstanceId: string;
	InstanceType: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.RouteConflicts
export interface RouteConflicts {
	RouteConflict: RouteConflict[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.DescribeRouteConflictResponse
export interface DescribeRouteConflictResponse {
	RequestId: string;
	PageNumber: number;
	TotalCount: number;
	PageSize: number;
	RouteConflicts: RouteConflicts;
}

