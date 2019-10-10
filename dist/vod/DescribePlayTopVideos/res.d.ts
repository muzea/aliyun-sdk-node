// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TopPlayVideoStatis
export interface TopPlayVideoStatis {
	PlayDuration: string;
	VV: string;
	UV: string;
	VideoId: string;
	Title: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TopPlayVideos
export interface TopPlayVideos {
	TopPlayVideoStatis: TopPlayVideoStatis[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribePlayTopVideosResponse
export interface DescribePlayTopVideosResponse {
	RequestId: string;
	PageNo: number;
	PageSize: number;
	TotalNum: number;
	TopPlayVideos: TopPlayVideos;
}

