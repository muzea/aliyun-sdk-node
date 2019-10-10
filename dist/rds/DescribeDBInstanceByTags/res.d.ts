// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.Tag
export interface Tag {
	TagKey: string;
	TagValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.Tags
export interface Tags {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstanceTag
export interface DBInstanceTag {
	DBInstanceId: string;
	Tags: Tags;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeDBInstanceByTags
export interface ItemsInDescribeDBInstanceByTags {
	DBInstanceTag: DBInstanceTag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeDBInstanceByTagsResponse
export interface DescribeDBInstanceByTagsResponse {
	RequestId: string;
	PageNumber: number;
	PageRecordCount: number;
	TotalRecordCount: number;
	Items: ItemsInDescribeDBInstanceByTags;
}

