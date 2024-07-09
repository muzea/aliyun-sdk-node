export interface DescribePdnsThreatStatisticsRequest {
    "Lang"?: string;
    "DomainName"?: string;
    "SubDomain"?: string;
    "ThreatType"?: string;
    "ThreatLevel"?: string;
    "Type"?: string;
    "OrderBy"?: string;
    "Direction"?: string;
    "ThreatSourceIp"?: string;
    "StartDate"?: string;
    "EndDate"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
}
