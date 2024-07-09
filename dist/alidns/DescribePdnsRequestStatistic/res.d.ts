export interface DescribePdnsRequestStatisticResponse {
    RequestId: string;
    Data: {
        V6HttpCount: number;
        V6HttpsCount: number;
        Timestamp: number;
        TotalCount: number;
        V4HttpCount: number;
        V4HttpsCount: number;
        V4Count: number;
        V6Count: number;
        HttpCount: number;
        HttpsCount: number;
        DohTotalCount: number;
        UdpTotalCount: number;
        IpCount: number;
    }[];
}
