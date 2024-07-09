export interface DescribeUpBpsPeakOfLineRequest {
    "StartTime": string;
    "EndTime": string;
    "Line": string;
    "DomainSwitch"?: string;
    "DomainName"?: string;
}
