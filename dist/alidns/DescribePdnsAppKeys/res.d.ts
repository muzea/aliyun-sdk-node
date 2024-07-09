export interface DescribePdnsAppKeysResponse {
    RequestId: string;
    AppKeys: {
        AppKeyId: string;
        CreateDate: string;
        CreateTimestamp: number;
        State: string;
    }[];
}
