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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.AddCategoryResponse
export interface AddCategoryResponse {
	RequestId: string;
	Category: Category;
}

