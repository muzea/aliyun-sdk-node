// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.ChildrenItem
export interface ChildrenItem {
	ChildDivisionName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.Children
export interface Children {
	ChildrenItem: ChildrenItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.AdminDivision
export interface AdminDivision {
	DivisionName: string;
	Children: Children;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.AdminDivisions
export interface AdminDivisions {
	AdminDivision: AdminDivision[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryDomainAdminDivisionResponse
export interface QueryDomainAdminDivisionResponse {
	RequestId: string;
	AdminDivisions: AdminDivisions;
}

