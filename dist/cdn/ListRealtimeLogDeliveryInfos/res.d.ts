interface ListRealtimeLogDeliveryInfosResponse {
    "Content": {
        "RealtimeLogDeliveryInfos": {
            "Project": string;
            "Logstore": string;
            "Region": string;
        }[];
    };
    "RequestId": string;
}
export { ListRealtimeLogDeliveryInfosResponse };