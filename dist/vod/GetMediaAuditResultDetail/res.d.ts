// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.ListItem
export interface ListItem {
	PornLabel: string;
	PornScore: string;
	TerrorismLabel: string;
	TerrorismScore: string;
	Timestamp: string;
	Url: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.MediaAuditResultDetail
export interface MediaAuditResultDetail {
	Total: number;
	List: ListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetMediaAuditResultDetailResponse
export interface GetMediaAuditResultDetailResponse {
	RequestId: string;
	MediaAuditResultDetail: MediaAuditResultDetail;
}

