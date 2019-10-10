// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.UisDnatEntry
export interface UisDnatEntry {
	UisDnatId: string;
	DestinationIp: string;
	DestinationPort: number;
	OriginalIp: string;
	OriginalPort: number;
	IpProtocol: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.UisDnatEntries
export interface UisDnatEntries {
	UisDnatEntry: UisDnatEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.DescribeDnatEntriesResponse
export interface DescribeDnatEntriesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	UisDnatEntries: UisDnatEntries;
}

