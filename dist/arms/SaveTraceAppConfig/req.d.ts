export interface SaveTraceAppConfigRequest {
    /**
     * 应用ID。
     * 在ARMS控制台的**应用监控**>**应用列表**页面单击目标应用名称。此时浏览器地址栏中的URL即包含应用的pid，格式为pid=xxx。由于浏览器进行了编码，因此需要对pid稍作修改。例如，如果URL中包含的pid为xxx%4074xxx，则需要将%40替换为@，即：xxx@74xxx。
     * @example `a2n80plglh@745eddxxx`
     */
    "Pid": string;
    /**
     * 自定义设置列表。
     */
    "Settings"?: {
        /**
         * 自定义设置，各设置的详细字段见下文说明。
         * - 调用链路采样相关
         * - 总开关设置
         * - 阈值设置
         * - 高级设置
         * - 线程设置
         * - 内存快照设置
         * - URL收敛设置
         * - 业务日志关联设置
         * @example `sampling.enable`
         */
        Key: string;
        /**
         * 自定义设置，各设置的详细字段见下文说明。
         * - 调用链路采样相关
         * - 总开关设置
         * - 阈值设置
         * - 高级设置
         * - 线程设置
         * - 内存快照设置
         * - URL收敛设置
         * - 业务日志关联设置
         * @example `true`
         */
        Value: string;
    }[];
}
