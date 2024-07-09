export interface DeleteSDGResponse {
    /**
     * 请求ID。
     * @example `86A6D421-A0C7-4C01-8648-47377CA6A2CE`
     */
    RequestId: string;
    Data: {
        Message: string;
        Success: boolean;
        Result: {
            FailedCount: number;
            SuccessCount: number;
            FailedItems: {
                Item: {
                    SdgId: string;
                };
                ErrMessage: string;
            }[];
        };
    };
}
