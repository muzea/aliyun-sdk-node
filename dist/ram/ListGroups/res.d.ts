// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.Group
export interface Group {
	Comments: string;
	AttachDate: string;
	CreateDate: string;
	UpdateDate: string;
	GroupName: string;
	JoinDate: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.GroupsInListGroups
export interface GroupsInListGroups {
	Group: Group[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.ListGroupsResponse
export interface ListGroupsResponse {
	RequestId: string;
	IsTruncated: boolean;
	Marker: string;
	Groups: GroupsInListGroups;
}

