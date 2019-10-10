// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ContactGroup
export interface ContactGroup {
	Name: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ContactGroupsInDeleteMonitorGroup
export interface ContactGroupsInDeleteMonitorGroup {
	ContactGroup: ContactGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Group
export interface Group {
	GroupName: string;
	ContactGroups: ContactGroupsInDeleteMonitorGroup;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DeleteMonitorGroupResponse
export interface DeleteMonitorGroupResponse {
	RequestId: string;
	Success: boolean;
	Code: number;
	Message: string;
	Group: Group;
}

