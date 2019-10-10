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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.GroupsInListGroupsForUser
export interface GroupsInListGroupsForUser {
	Group: Group[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.ListGroupsForUserResponse
export interface ListGroupsForUserResponse {
	RequestId: string;
	Groups: GroupsInListGroupsForUser;
}

