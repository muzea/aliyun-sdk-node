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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ItemsInCreateDrdsDBPreview
export interface ItemsInCreateDrdsDBPreview {
	Item: Item[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.CreateDrdsDBPreviewResponse
export interface CreateDrdsDBPreviewResponse {
	RequestId: string;
	Success: boolean;
	Items: ItemsInCreateDrdsDBPreview;
}

