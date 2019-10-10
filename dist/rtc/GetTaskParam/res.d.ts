// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.MixPaneItem
export interface MixPaneItem {
	PaneId: number;
	UserId: string;
	SourceType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.MixPane
export interface MixPane {
	MixPaneItem: MixPaneItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.GetTaskParamResponse
export interface GetTaskParamResponse {
	RequestId: string;
	ChannelId: string;
	TemplateId: number;
	MixPane: MixPane;
}

