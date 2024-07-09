export interface DisableBruteForceRecordRequest {
    /**
     * 防暴力破解IP的记录ID。
     * > 调用[DescribeBruteForceRecords](~~DescribeBruteForceRecords~~)接口获取该参数。
     * @example `114166XX`
     */
    "Id"?: number;
    /**
     * 服务器UUID。
     * @example `cbb9aa80-a8d1-443c-9ff0-2c36cd39****`
     */
    "Uuid": string;
    /**
     * 防暴力破解IP地址。
     * @example `8.210.XX.XX`
     */
    "BlockIp": string;
    /**
     * 端口号。
     * @example `*​/*`
     */
    "Port"?: string;
    /**
     * 服务器暴力破解拦截策略阻断IP的方向。
     * 取值：
     * - **in** ：入方向
     * - **out**： 出方向
     * @example `in`
     */
    "Bound"?: string;
}
