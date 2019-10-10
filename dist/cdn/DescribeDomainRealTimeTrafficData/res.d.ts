interface DescribeDomainRealTimeTrafficDataResponse {
    "DomainName": string;
    "DataInterval": string;
    "RealTimeTrafficDataPerInterval": {
        "DataModule": {
            "TimeStamp": string;
            "Value": string;
        }[];
    };
    "RequestId": string;
    "StartTime": string;
    "EndTime": string;
}
export { DescribeDomainRealTimeTrafficDataResponse };