// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.GroupsItem
export interface GroupsItem {
	GroupName: string;
	Count: string;
	Status: string;
	CreateTime: string;
	ModifyTime: string;
	GroupId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.ListFaceSearchGroupsResponse
export interface ListFaceSearchGroupsResponse {
	RequestId: string;
	NextMarker: string;
	Groups: GroupsItem[];
}

