// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Category
export interface Category {
	Id: string;
	GmtCreate: number;
	GmtModified: number;
	Name: string;
	ParentId: string;
	Type: string;
	CategoryType: string;
	ObjectType: string;
	ObjectId: string;
	ProjectId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Categories
export interface Categories {
	Category: Category[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListFlowCategoryResponse
export interface ListFlowCategoryResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	Total: number;
	Categories: Categories;
}

