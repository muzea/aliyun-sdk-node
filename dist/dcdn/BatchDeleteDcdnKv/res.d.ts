export interface BatchDeleteDcdnKvResponse {
    /**
     * 请求ID。
     * @example `EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
    `
     */
    RequestId: string;
    /**
     * 删除失败的键列表。
     */
    FailKeys: string[];
    /**
     * 删除成功的键列表。
     */
    SuccessKeys: string[];
}
