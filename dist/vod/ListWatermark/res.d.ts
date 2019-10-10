// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.WatermarkInfo
export interface WatermarkInfo {
	Name: string;
	AppId: string;
	WatermarkId: string;
	FileUrl: string;
	WatermarkConfig: string;
	CreationTime: string;
	IsDefault: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.ListWatermarkResponse
export interface ListWatermarkResponse {
	RequestId: string;
	WatermarkInfos: WatermarkInfo[];
}

