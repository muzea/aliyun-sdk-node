// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstanceIds
export interface DBInstanceIds {
	DBInstanceIds: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.TagInfos
export interface TagInfos {
	TagKey: string;
	TagValue: string;
	DBInstanceIds: DBInstanceIds;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeTags
export interface ItemsInDescribeTags {
	TagInfos: TagInfos[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeTagsResponse
export interface DescribeTagsResponse {
	RequestId: string;
	Items: ItemsInDescribeTags;
}

