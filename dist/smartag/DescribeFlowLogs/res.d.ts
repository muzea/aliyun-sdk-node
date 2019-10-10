interface DescribeFlowLogsResponse {
    "PageNumber": number;
    "FlowLogs": {
        "FlowLogSetType": {
            "Name": string;
            "InactiveAging": number;
            "Status": string;
            "NetflowVersion": string;
            "ProjectName": string;
            "SlsRegionId": string;
            "ActiveAging": number;
            "FlowLogId": string;
            "OutputType": string;
            "TotalSagNum": number;
            "NetflowServerPort": number;
            "LogstoreName": string;
        }[];
    };
    "TotalCount": number;
    "PageSize": number;
    "RequestId": string;
}
export { DescribeFlowLogsResponse };