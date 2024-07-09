export interface GetVMDeployOrderResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `”“`
     */
    errorMessage: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true 接口调用成功，false 接口调用失败`
     */
    success: boolean;
    /**
     * 错误码
     * @example `”“`
     */
    errorCode: string;
    /**
     * 部署单
     */
    deployOrder: {
        /**
         * 部署单ID
         * @example `11111`
         */
        deployOrderId: string;
        /**
         * 创建时时间
         * @example `111111111111`
         */
        createTime: number;
        /**
         * 修改时间
         * @example `11111111111`
         */
        updateTime: number;
        /**
         * 创建人
         * @example `ssaassa`
         */
        creator: string;
        /**
         * 当前发布批次
         * @example `2`
         */
        currentBatch: number;
        /**
         * 总发布批次
         * @example `3`
         */
        totalBatch: number;
        /**
         * 发布状态
         *
         * - Waiting（暂停）
         * - Running（部署中）
         * - Cancelled（已取消）
         * - Success（成功）
         * @example `Success`
         */
        status: string;
        /**
         * 错误码
         * @example `错误信息`
         */
        exceptionCode: string;
        /**
         * 部署机器信息
         */
        deployMachineInfo: {
            /**
             * 主机组ID
             * @example `1111`
             */
            hostGroupId: number;
            /**
             * 发布批次
             * @example `11`
             */
            batchNum: number;
            /**
             * 部署机器列表
             */
            deployMachines: {
                /**
                 * 开始时间
                 * @example `1111111111`
                 */
                createTime: number;
                /**
                 * 修改时间
                 * @example `11111111`
                 */
                updateTime: number;
                /**
                 * - Success(成功)
                 * - Pending（待部署）
                 * - Running（部署中）
                 * -  Cancelled（取消）
                 * -  Queued(部署等待中)
                 * -  Failed（失败）
                 * -  Skipped（已跳过）
                 * @example `Success`
                 */
                status: string;
                /**
                 * 机器sn
                 * @example `sasssasa`
                 */
                machineSn: string;
                /**
                 * ok(正常)  error(连接失败)
                 * @example `ok`
                 */
                clientStatus: string;
                /**
                 * 机器IP
                 * @example `127.0.0.1`
                 */
                ip: string;
                /**
                 * 后续action
                 */
                actions: {
                    /**
                     * - RetryVMDeployMachine 重试机器部署
                     * - SkipVMDeployMachine  跳过机器部署
                     * - LogVMDeployMachine  查看机器部署日志
                     * @example `RetryVMDeployMachine`
                     */
                    type: string;
                    /**
                     * 当前用户是否有权限进行后续action
                     * @example `true`
                     */
                    disable: boolean;
                    /**
                     * 参数
                     * @example `{}`
                     */
                    params: any;
                }[];
                /**
                 * 部署批次
                 * @example `22`
                 */
                batchNum: number;
            }[];
        };
        /**
         * 后续action
         */
        actions: {
            /**
             * StopVMDeployOrder  取消部署单
             * ResumeVMDeployOrder  继续部署单运行
             * @example `StopVMDeployOrder`
             */
            type: string;
            /**
             * 当前用户是否有权限进行后续action
             * @example `true`
             */
            disable: boolean;
            /**
             * 参数
             * @example `{}`
             */
            params: any;
        }[];
    };
}
