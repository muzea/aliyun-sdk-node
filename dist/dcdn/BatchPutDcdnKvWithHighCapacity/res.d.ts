export interface BatchPutDcdnKvWithHighCapacityResponse {
    /**
     * 请求ID。
     * @example `EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
    `
     */
    RequestId: string;
    /**
     * 写失败的键列表。
     */
    FailKeys: string[];
    /**
     * 写成功的键列表。
     */
    SuccessKeys: string[];
}
