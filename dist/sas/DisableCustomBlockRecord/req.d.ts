export interface DisableCustomBlockRecordRequest {
    /**
     * 防暴力破解IP地址。
     * > 调用[DescribeCustomBlockRecords](~~DescribeCustomBlockRecords~~)接口获取该参数。
     * @example `62.233.XX.XX`
     */
    "BlockIp": string;
    /**
     * 服务器暴力破解拦截策略阻断IP的方向。
     * 取值：
     * - **in** ：入方向
     * - **out**： 出方向
     * @example `in`
     */
    "Bound": string;
}
