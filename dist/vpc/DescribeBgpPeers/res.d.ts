// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.BgpPeer
export interface BgpPeer {
	Name: string;
	Description: string;
	BgpPeerId: string;
	BgpGroupId: string;
	PeerIpAddress: string;
	PeerAsn: string;
	AuthKey: string;
	RouterId: string;
	BgpStatus: string;
	Status: string;
	Keepalive: string;
	LocalAsn: string;
	Hold: string;
	IsFake: string;
	RouteLimit: string;
	RegionId: string;
	EnableBfd: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.BgpPeers
export interface BgpPeers {
	BgpPeer: BgpPeer[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeBgpPeersResponse
export interface DescribeBgpPeersResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	BgpPeers: BgpPeers;
}

