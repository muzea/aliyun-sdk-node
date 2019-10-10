// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.OsInfo
export interface OsInfo {
	OsTag: string;
	Platform: string;
	Version: string;
	Architecture: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.OsTags
export interface OsTags {
	OsInfo: OsInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListImagesResponse
export interface ListImagesResponse {
	RequestId: string;
	OsTags: OsTags;
}

