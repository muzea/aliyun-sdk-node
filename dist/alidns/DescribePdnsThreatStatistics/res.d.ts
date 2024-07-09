export interface DescribePdnsThreatStatisticsResponse {
    TotalCount: number;
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    Data: {
        DomainName: string;
        SubDomain: string;
        LatestThreatTime: number;
        TotalCount: number;
        DohTotalCount: number;
        UdpTotalCount: number;
        MaxThreatLevel: string;
        DomainCount: number;
        SourceIp: string;
        ThreatType: string;
        ThreatLevel: string;
    }[];
}
