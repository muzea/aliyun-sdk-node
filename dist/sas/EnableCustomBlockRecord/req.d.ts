export interface EnableCustomBlockRecordRequest {
    /**
     * 防暴力破解IP地址。
     * @example `43.248.XX.XX`
     */
    "BlockIp": string;
    /**
     * 服务器暴力破解拦截策略阻断IP的方向。
     * 取值：
     * - **in** ：入方向
     * - **out**：出方向
     * @example `in`
     */
    "Bound": string;
}
