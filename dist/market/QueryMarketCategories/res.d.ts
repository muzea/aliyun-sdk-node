// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.ChildCategory
export interface ChildCategory {
	Id: number;
	CategoryCode: string;
	CategoryName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.ChildCategories
export interface ChildCategories {
	ChildCategory: ChildCategory[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Category
export interface Category {
	Id: number;
	CategoryCode: string;
	CategoryName: string;
	ChildCategories: ChildCategories;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Categories
export interface Categories {
	Category: Category[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.QueryMarketCategoriesResponse
export interface QueryMarketCategoriesResponse {
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	RequestId: string;
	Categories: Categories;
}

