export interface DescribeInstanceRebootStatusResponse {
    /**
     * 返回的总数据条数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5BD95679-D63A-4151-97D0-188432F4A57`
     */
    RequestId: string;
    /**
     * 实例重启状态列表。
     */
    RebootStatuses: {
        /**
         * 服务器UUID。
         * @example `9b59c2d6-0967-46e3-ad7b-152227c****`
         */
        Uuid: string;
        /**
         * 当前服务器的重启状态。取值：
         * - **0**：重启中
         * - **1**：重启成功
         * - **2**：重启失败
         * @example `2`
         */
        RebootStatus: number;
        /**
         * 重启实例失败的错误码。取值：
         * - **10001**： 下发命令失败
         * - **10002**：重启失败
         * - **10003**：超时
         * @example `10001`
         */
        Code: string;
        /**
         * 重启异常信息。
         * @example `push failed`
         */
        Msg: string;
    }[];
}
