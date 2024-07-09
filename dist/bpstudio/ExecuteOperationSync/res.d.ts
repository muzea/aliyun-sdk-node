export interface ExecuteOperationSyncResponse {
    /**
     * 错误信息
     * @example `Access key ID cannot be null.`
     */
    Message: string;
    /**
     * 请求ID
     * @example `FDC73B05-5331-57AA-BA93-4C9882792FF5`
     */
    RequestId: string;
    /**
     * 同步操作任务ID
     * @example `op_xxxxxxxxxxxxxxxxxx_dds_modifyInstanceType_BYSOQGWUV6PME412_ERMEZLXNN3K9N3OL`
     */
    Data: string;
    /**
     * 结果码，200代表成功；其它代表失败。
     * @example `200`
     */
    Code: number;
}
