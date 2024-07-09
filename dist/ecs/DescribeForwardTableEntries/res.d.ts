export interface DescribeForwardTableEntriesResponse {
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    TotalCount: number;
    ForwardTableEntries: {
        ForwardTableEntry: {
            Status: string;
            ForwardEntryId: string;
            InternalIp: string;
            InternalPort: string;
            ForwardTableId: string;
            ExternalPort: string;
            IpProtocol: string;
            ExternalIp: string;
        }[];
    };
}
