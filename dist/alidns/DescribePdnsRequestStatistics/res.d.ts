export interface DescribePdnsRequestStatisticsResponse {
    TotalCount: number;
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    Data: {
        DomainName: string;
        SubDomain: string;
        V6HttpCount: number;
        V6HttpsCount: number;
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
        ThreatCount: number;
        MaxThreatLevel: string;
        ThreatInfo: {
            ThreatType: string;
            ThreatLevel: string;
        }[];
    }[];
}
