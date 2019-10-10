// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.TagInfo
export interface TagInfo {
	TagName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.TagInfosInQueryTags
export interface TagInfosInQueryTags {
	TagInfo: TagInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.QueryTagsResponse
export interface QueryTagsResponse {
	RequestId: string;
	TagInfos: TagInfosInQueryTags;
}

