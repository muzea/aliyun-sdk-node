// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.PornItem
export interface PornItem {
	Label: string;
	Score: string;
	Timestamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TerrorismItem
export interface TerrorismItem {
	Label: string;
	Score: string;
	Timestamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.MediaAuditResultTimeline
export interface MediaAuditResultTimeline {
	Porn: PornItem[];
	Terrorism: TerrorismItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetMediaAuditResultTimelineResponse
export interface GetMediaAuditResultTimelineResponse {
	RequestId: string;
	MediaAuditResultTimeline: MediaAuditResultTimeline;
}

