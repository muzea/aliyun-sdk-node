// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ForwardTableEntry
export interface ForwardTableEntry {
	ForwardTableId: string;
	ForwardEntryId: string;
	ExternalIp: string;
	ExternalPort: string;
	IpProtocol: string;
	InternalIp: string;
	InternalPort: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ForwardTableEntries
export interface ForwardTableEntries {
	ForwardTableEntry: ForwardTableEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeForwardTableEntriesResponse
export interface DescribeForwardTableEntriesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	ForwardTableEntries: ForwardTableEntries;
}

