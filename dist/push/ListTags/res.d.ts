// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.TagInfo
export interface TagInfo {
	TagName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.TagInfosInListTags
export interface TagInfosInListTags {
	TagInfo: TagInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.ListTagsResponse
export interface ListTagsResponse {
	RequestId: string;
	TagInfos: TagInfosInListTags;
}

