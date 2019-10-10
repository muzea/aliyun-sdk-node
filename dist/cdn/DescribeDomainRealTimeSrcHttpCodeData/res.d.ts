interface DescribeDomainRealTimeSrcHttpCodeDataResponse {
    "RealTimeSrcHttpCodeData": {
        "UsageData": {
            "TimeStamp": string;
            "Value": {
                "RealTimeSrcCodeProportionData": {
                    "Proportion": string;
                    "Code": string;
                }[];
            };
        }[];
    };
    "DataInterval": string;
    "RequestId": string;
    "DomainName": string;
    "EndTime": string;
    "StartTime": string;
}
export { DescribeDomainRealTimeSrcHttpCodeDataResponse };