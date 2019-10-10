// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Category
export interface Category {
	CateName: string;
	Level: number;
	SubTotal: number;
	ParentId: number;
	CateId: number;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.SubCategories
export interface SubCategories {
	Category: Category[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetCategoriesResponse
export interface GetCategoriesResponse {
	RequestId: string;
	SubTotal: number;
	Category: Category;
	SubCategories: SubCategories;
}

