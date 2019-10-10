// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DbNamesInCreateDrdsDBPreview
export interface DbNamesInCreateDrdsDBPreview {
	DbName: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.Item
export interface Item {
	Host: string;
	Schema: string;
	SendTime: number;
	DbInstanceId: string;
	ResponseTime: number;
	Sql: string;
	DbNames: DbNamesInCreateDrdsDBPreview;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ItemsInDescribeDrdsSlowSqls
export interface ItemsInDescribeDrdsSlowSqls {
	Item: Item[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeDrdsSlowSqlsResponse
export interface DescribeDrdsSlowSqlsResponse {
	RequestId: string;
	Success: boolean;
	Total: number;
	PageNumber: number;
	PageSize: number;
	Items: ItemsInDescribeDrdsSlowSqls;
}

