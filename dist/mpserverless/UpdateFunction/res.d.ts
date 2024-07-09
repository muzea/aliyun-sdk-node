export interface UpdateFunctionResponse {
    /**
     * 请求ID。
     * @example `C293BB03-B6AD-46C2-80D1-19C8FB573916`
     */
    RequestId: string;
    /**
     * 定时触发配置。
     * @example `cron:0 0 * * * *`
     */
    TimingTriggerConfig: string;
    /**
     * 用户自定义定时任务入参，用户可以在云函数中通过`ctx.args.userPayload`取出该参数。
     * @example `24`
     */
    TimingTriggerUserPayload: string;
    /**
     * HTTP触发的路径。
     * @example `/http/hello`
     */
    HttpTriggerPath: string;
    /**
     * 云函数的创建时间。
     * @example `2019-06-20T03:22:54.854Z`
     */
    CreatedAt: string;
    /**
     * 云函数的名称。
     * @example `demoFunction`
     */
    Name: string;
    /**
     * 云函数的修改时间。
     * @example `2019-06-20T03:22:54.854Z`
     */
    ModifiedAt: string;
    /**
     * 云函数的描述信息。
     * @example `description`
     */
    Desc: string;
    /**
     * 云函数运行参数。
     */
    Spec: {
        /**
         * 超时时间。
         * @example `5s`
         */
        Timeout: string;
        /**
         * 运行环境。
         * @example `Node.js 8`
         */
        Runtime: string;
        /**
         * 单实例允许的最大并发度
         * @example `1`
         */
        InstanceConcurrency: number;
        /**
         * 内存大小。
         * @example `128 MB`
         */
        Memory: string;
    };
}
