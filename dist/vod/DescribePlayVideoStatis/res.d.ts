// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.VideoPlayStatisDetail
export interface VideoPlayStatisDetail {
	Date: string;
	PlayDuration: string;
	VV: string;
	UV: string;
	PlayRange: string;
	Title: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.VideoPlayStatisDetails
export interface VideoPlayStatisDetails {
	VideoPlayStatisDetail: VideoPlayStatisDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribePlayVideoStatisResponse
export interface DescribePlayVideoStatisResponse {
	RequestId: string;
	VideoPlayStatisDetails: VideoPlayStatisDetails;
}

