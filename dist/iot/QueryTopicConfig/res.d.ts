export interface QueryTopicConfigResponse {
    Code: string;
    Message: string;
    RequestId: string;
    Success: boolean;
    Data: {
        TopicConfigInfo: {
            TopicFullName: string;
            Operation: string;
            ProductKey: string;
            Description: string;
            Codec: string;
            EnableBroadcast: boolean;
            EnableProxySubscribe: boolean;
        }[];
    };
}
