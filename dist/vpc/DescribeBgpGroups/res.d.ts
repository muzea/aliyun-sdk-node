// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.BgpGroup
export interface BgpGroup {
	Name: string;
	Description: string;
	BgpGroupId: string;
	PeerAsn: string;
	AuthKey: string;
	RouterId: string;
	Status: string;
	Keepalive: string;
	LocalAsn: string;
	Hold: string;
	IsFake: string;
	RouteLimit: string;
	RegionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.BgpGroups
export interface BgpGroups {
	BgpGroup: BgpGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeBgpGroupsResponse
export interface DescribeBgpGroupsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	BgpGroups: BgpGroups;
}

