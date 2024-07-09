export interface DescribePdnsThreatStatisticResponse {
    RequestId: string;
    Data: {
        TotalCount: number;
        Timestamp: number;
        ThreatType: string;
        ThreatLevel: string;
        DohTotalCount: number;
        UdpTotalCount: number;
    }[];
}
