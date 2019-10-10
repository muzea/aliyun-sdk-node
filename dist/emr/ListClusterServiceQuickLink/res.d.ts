// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.QuickLink
export interface QuickLink {
	ServiceName: string;
	ServiceDisplayName: string;
	QuickLinkAddress: string;
	Protocol: string;
	Port: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.QuickLinkList
export interface QuickLinkList {
	QuickLink: QuickLink[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListClusterServiceQuickLinkResponse
export interface ListClusterServiceQuickLinkResponse {
	RequestId: string;
	QuickLinkList: QuickLinkList;
}

