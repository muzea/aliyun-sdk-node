export interface ExecuteOperationASyncResponse {
    /**
     * 错误信息
     * @example `" "`
     */
    Message: string;
    /**
     * 请求ID
     * @example `SD-WEF-DSW-32ED-323DDSD-2332D`
     */
    RequestId: string;
    /**
     * 本次操作信息。
     * @example `op_xxxxxxxxxxxxxxxxxx_ecs_modifyInstanceType_BYSOQGWUV6PME412_ERMEZLXNN3K9N3OL`
     */
    Data: string;
    /**
     * 结果码，200代表成功；其它代表失败。
     * @example `200`
     */
    Code: number;
}
