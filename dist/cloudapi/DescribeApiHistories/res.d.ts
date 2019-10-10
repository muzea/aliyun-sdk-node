// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiHisItem
export interface ApiHisItem {
	ApiId: string;
	HistoryVersion: string;
	RegionId: string;
	GroupName: string;
	ApiName: string;
	GroupId: string;
	Status: string;
	StageName: string;
	Description: string;
	DeployedTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiHisItemsInDescribeApiHistories
export interface ApiHisItemsInDescribeApiHistories {
	ApiHisItem: ApiHisItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApiHistoriesResponse
export interface DescribeApiHistoriesResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	ApiHisItems: ApiHisItemsInDescribeApiHistories;
}

