// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.SasScreenSettingListItem
export interface SasScreenSettingListItem {
	ScreenSettingTitle: string;
	ScreenSettingIdMap: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.DescribeScreenSettingsResponse
export interface DescribeScreenSettingsResponse {
	RequestId: string;
	SasScreenSettingList: SasScreenSettingListItem[];
}

