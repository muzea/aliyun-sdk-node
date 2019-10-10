// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigHistory
export interface ConfigHistory {
	NewValue: string;
	ConfigFileName: string;
	Comment: string;
	Applied: boolean;
	OldValue: string;
	Author: string;
	CreateTime: number;
	ConfigVersion: string;
	ServiceName: string;
	ConfigItemName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ConfigHistoryListInListClusterServiceConfigHistory
export interface ConfigHistoryListInListClusterServiceConfigHistory {
	ConfigHistory: ConfigHistory[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListClusterServiceConfigHistoryResponse
export interface ListClusterServiceConfigHistoryResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	ConfigHistoryList: ConfigHistoryListInListClusterServiceConfigHistory;
}

