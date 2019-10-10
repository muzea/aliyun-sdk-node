// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/baas.NodeInfoListItem
export interface NodeInfoListItem {
	NodeName: string;
	Status: boolean;
	BlockHeight: number;
	Version: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/baas.ResultItem
export interface ResultItem {
	Name: string;
	Domain: string;
	Createtime: number;
	WithPeer: boolean;
	Title: string;
	Online: boolean;
	CreateTime: number;
	InviteTime: string;
	DestroyTime: string;
	TransactionSum: number;
	RegionId: string;
	Content: string;
	ChannelId: string;
	Normal: boolean;
	ApproveTime: string;
	AbnormalNodes: number;
	OrganizationId: string;
	Description: string;
	NodeNumber: number;
	Id: number;
	Path: string;
	Status: number;
	Username: string;
	ReqAddr: string;
	Updatetime: number;
	Version: string;
	RejectReason: string;
	IsRole: boolean;
	Bizid: string;
	State: string;
	SignedAddr: string;
	ConfirmTime: string;
	AcceptTime: string;
	BlockHeight: number;
	NodeInfoList: NodeInfoListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/baas.DescribeRegionsResponse
export interface DescribeRegionsResponse {
	RequestId: string;
	Success: boolean;
	ErrorCode: number;
	Result: ResultItem[];
}

