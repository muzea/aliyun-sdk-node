// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/arms.ContactGroup
export interface ContactGroup {
	ContactGroupId: number;
	ContactGroupName: string;
	UserId: string;
	CreateTime: number;
	UpdateTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/arms.SearchAlertContactGroupResponse
export interface SearchAlertContactGroupResponse {
	RequestId: string;
	ContactGroups: ContactGroup[];
}

