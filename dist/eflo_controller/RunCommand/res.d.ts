export interface RunCommandResponse {
    /**
     * Id of the request
     * @example `2FE2B22C-CF9D-59DE-BF63-DC9B9B33A9D1`
     */
    RequestId: string;
    /**
     * 命令执行ID。
     * @example `t-7d2a745b412b4601b2d47f6a768d*`
     */
    InvokeId: string;
}
