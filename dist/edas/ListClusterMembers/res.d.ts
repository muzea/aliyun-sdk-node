// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ClusterMember
export interface ClusterMember {
	ClusterMemberId: string;
	ClusterId: string;
	EcuId: string;
	EcsId: string;
	Status: number;
	CreateTime: number;
	UpdateTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ClusterMemberList
export interface ClusterMemberList {
	ClusterMember: ClusterMember[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ClusterMemberPage
export interface ClusterMemberPage {
	CurrentPage: number;
	PageSize: number;
	TotalSize: number;
	ClusterMemberList: ClusterMemberList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListClusterMembersResponse
export interface ListClusterMembersResponse {
	Code: number;
	Message: string;
	RequestId: string;
	ClusterMemberPage: ClusterMemberPage;
}

