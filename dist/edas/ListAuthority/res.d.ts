// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.Action
export interface Action {
	Name: string;
	Code: string;
	GroupId: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ActionListInListAuthority
export interface ActionListInListAuthority {
	Action: Action[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.Authority
export interface Authority {
	GroupId: string;
	Name: string;
	Description: string;
	ActionList: ActionListInListAuthority;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.AuthorityList
export interface AuthorityList {
	Authority: Authority[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListAuthorityResponse
export interface ListAuthorityResponse {
	Code: number;
	Message: string;
	RequestId: string;
	AuthorityList: AuthorityList;
}

