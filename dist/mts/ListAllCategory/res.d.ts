// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Category
export interface Category {
	Score: string;
	CateId: string;
	Label: string;
	ParentId: string;
	Level: string;
	CateName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.CategoryList
export interface CategoryList {
	Category: Category[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ListAllCategoryResponse
export interface ListAllCategoryResponse {
	RequestId: string;
	CategoryList: CategoryList;
}

