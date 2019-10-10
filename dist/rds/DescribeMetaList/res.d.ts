// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.Meta
export interface Meta {
	Database: string;
	Tables: string;
	Size: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeMetaList
export interface ItemsInDescribeMetaList {
	Meta: Meta[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeMetaListResponse
export interface DescribeMetaListResponse {
	RequestId: string;
	DBInstanceName: string;
	PageNumber: number;
	PageRecordCount: number;
	TotalRecordCount: number;
	TotalPageCount: number;
	Items: ItemsInDescribeMetaList;
}

