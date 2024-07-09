export interface DescribePdnsAccountSummaryResponse {
    RequestId: string;
    Data: {
        UserId: number;
        DomainCount: number;
        SubDomainCount: number;
        HttpCount: number;
        HttpsCount: number;
        TotalCount: number;
        ThreatCount: number;
    };
}
