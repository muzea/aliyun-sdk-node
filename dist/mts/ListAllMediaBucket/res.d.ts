// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaBucket
export interface MediaBucket {
	Bucket: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaBucketList
export interface MediaBucketList {
	MediaBucket: MediaBucket[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ListAllMediaBucketResponse
export interface ListAllMediaBucketResponse {
	RequestId: string;
	NextPageToken: string;
	MediaBucketList: MediaBucketList;
}

