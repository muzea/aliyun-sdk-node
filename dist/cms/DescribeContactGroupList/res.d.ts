// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ContactGroupsInDescribeContactGroupList
export interface ContactGroupsInDescribeContactGroupList {
	ContactGroup: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeContactGroupListResponse
export interface DescribeContactGroupListResponse {
	Success: boolean;
	Code: string;
	Message: string;
	Total: number;
	RequestId: string;
	ContactGroups: ContactGroupsInDescribeContactGroupList;
}

