export interface DescribePdnsAppKeyResponse {
    RequestId: string;
    AppKey: {
        AppKeyId: string;
        AppKeySecret: string;
        State: string;
        CreateDate: string;
        CreateTimestamp: number;
    };
}
