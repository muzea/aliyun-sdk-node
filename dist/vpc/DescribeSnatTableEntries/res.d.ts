// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.SnatTableEntry
export interface SnatTableEntry {
	SnatTableId: string;
	SnatEntryId: string;
	SourceVSwitchId: string;
	SourceCIDR: string;
	SnatIp: string;
	Status: string;
	SnatEntryName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.SnatTableEntries
export interface SnatTableEntries {
	SnatTableEntry: SnatTableEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeSnatTableEntriesResponse
export interface DescribeSnatTableEntriesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	SnatTableEntries: SnatTableEntries;
}

