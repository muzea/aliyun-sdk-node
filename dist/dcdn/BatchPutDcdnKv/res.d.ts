export interface BatchPutDcdnKvResponse {
    /**
     * 请求ID。
     * @example `156A6B-677B1A-4297B7-9187B7-2B44792`
     */
    RequestId: string;
    /**
     * 写失败的key列表。
     */
    FailKeys: string[];
    /**
     * 写成功的key列表。
     */
    SuccessKeys: string[];
}
