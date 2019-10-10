// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DemoProject
export interface DemoProject {
	RegionId: string;
	PackageUrl: string;
	SourceUrl: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DemoProjects
export interface DemoProjects {
	DemoProject: DemoProject[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.Category
export interface Category {
	CategoryId: string;
	CategoryName: string;
	CategoryLogo: string;
	CategoryDescription: string;
	CreateTime: string;
	UpdateTime: string;
	DemoProjects: DemoProjects;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.Categories
export interface Categories {
	Category: Category[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DescribeCategoriesResponse
export interface DescribeCategoriesResponse {
	RequestId: string;
	Code: string;
	Message: string;
	Categories: Categories;
}

