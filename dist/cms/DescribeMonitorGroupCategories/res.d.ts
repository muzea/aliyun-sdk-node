// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.CategoryItem
export interface CategoryItem {
	Category: string;
	Count: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.MonitorGroupCategory
export interface MonitorGroupCategory {
	CategoryItem: CategoryItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.MonitorGroupCategories
export interface MonitorGroupCategories {
	GroupId: number;
	MonitorGroupCategory: MonitorGroupCategory;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeMonitorGroupCategoriesResponse
export interface DescribeMonitorGroupCategoriesResponse {
	RequestId: string;
	Success: boolean;
	Code: number;
	Message: string;
	MonitorGroupCategories: MonitorGroupCategories;
}

