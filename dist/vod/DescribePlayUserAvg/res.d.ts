// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.UserPlayStatisAvg
export interface UserPlayStatisAvg {
	Date: string;
	AvgPlayDuration: string;
	AvgPlayCount: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.UserPlayStatisAvgs
export interface UserPlayStatisAvgs {
	UserPlayStatisAvg: UserPlayStatisAvg[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribePlayUserAvgResponse
export interface DescribePlayUserAvgResponse {
	RequestId: string;
	UserPlayStatisAvgs: UserPlayStatisAvgs;
}

