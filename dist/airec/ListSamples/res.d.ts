export interface ListSamplesResponse {
    /**
     * 当前请求的RequestID
     * @example `8B90B646-1678-41A3-B23F-EAC6587B0E48`
     */
    requestId: string;
    /**
     * 样本列表
     * @example `result`
     */
    result: any[];
}
