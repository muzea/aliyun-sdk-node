interface ListRealtimeLogDeliveryDomainsResponse {
    "Content": {
        "Domains": {
            "DomainName": string;
            "Status": string;
        }[];
    };
    "RequestId": string;
}
export { ListRealtimeLogDeliveryDomainsResponse };