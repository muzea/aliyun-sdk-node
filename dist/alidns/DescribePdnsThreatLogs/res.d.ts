export interface DescribePdnsThreatLogsResponse {
    TotalCount: number;
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    Logs: {
        ThreatTime: string;
        ThreatType: string;
        ThreatLevel: string;
        SourceIp: string;
        SubDomain: string;
    }[];
}
