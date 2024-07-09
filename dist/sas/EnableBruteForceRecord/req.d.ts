export interface EnableBruteForceRecordRequest {
    /**
     * 要开启的暴力破解记录的ID。
     * > 调用[DescribeBruteForceRecords](~~DescribeBruteForceRecords~~)接口获取该参数。
     * @example `116602XX`
     */
    "Id"?: number;
    /**
     * 防暴力破解规则生效的服务器的uuid。
     * @example `71046acb-8bff-4c3b-9163-24deb007****`
     */
    "Uuid": string;
    /**
     * 防暴力破解IP地址。
     * @example `61.155.XX.XX`
     */
    "BlockIp": string;
    /**
     * 端口号。
     * @example `22/22`
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
