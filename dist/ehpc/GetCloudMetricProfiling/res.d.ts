// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.SvgInfo
export interface SvgInfo {
	Name: string;
	Type: string;
	Url: string;
	Size: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.SvgUrls
export interface SvgUrls {
	SvgInfo: SvgInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.GetCloudMetricProfilingResponse
export interface GetCloudMetricProfilingResponse {
	RequestId: string;
	SvgUrls: SvgUrls;
}

