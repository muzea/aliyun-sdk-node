export interface DescribePdnsUdpIpSegmentsResponse {
    TotalCount: number;
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    IpSegments: {
        Name: string;
        Ip: string;
        Mask: number;
        State: string;
        CreateDate: string;
        UpdateDate: string;
    }[];
}
