// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.Conflict
export interface Conflict {
	DestinationCidrBlock: string;
	RegionId: string;
	InstanceId: string;
	InstanceType: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.Conflicts
export interface Conflicts {
	Conflict: Conflict[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.PublishedRouteEntry
export interface PublishedRouteEntry {
	DestinationCidrBlock: string;
	ChildInstanceRouteTableId: string;
	NextHopType: string;
	RouteType: string;
	NextHopId: string;
	OperationalMode: boolean;
	PublishStatus: string;
	Conflicts: Conflicts;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.PublishedRouteEntries
export interface PublishedRouteEntries {
	PublishedRouteEntry: PublishedRouteEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.DescribePublishedRouteEntriesResponse
export interface DescribePublishedRouteEntriesResponse {
	RequestId: string;
	PageNumber: number;
	TotalCount: number;
	PageSize: number;
	PublishedRouteEntries: PublishedRouteEntries;
}

