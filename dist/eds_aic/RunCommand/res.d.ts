export interface RunCommandResponse {
    /**
     * 请求ID。
     * @example `440D7342-5E7C-B2DB-D0B4EAC2BDF1****`
     */
    RequestId: string;
    /**
     * 命令执行ID，可以通过这个ID查询命令执行结果。
     * @example `t-gov2ujrk32v4****`
     */
    InvokeId: string;
}
