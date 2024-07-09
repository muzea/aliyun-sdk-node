export interface ModifyCustomBlockRecordRequest {
    /**
     * 服务器列表。
     * @example `2516fe4f-adb6-45d1-87a7-90ce1213****,30746836-68d0-47f6-8b2d-c93150da****,7c3ac531-077b-46b8-8706-5c8d4e73****`
     */
    "Uuids": string;
    /**
     * 防暴力破解IP地址。
     * @example `10.12.XX.XX`
     */
    "BlockIp": string;
    /**
     * 服务器防暴力破解拦截策略阻断IP的方向。
     * 取值：
     * - **in** ：入方向
     * - **out**：出方向
     * @example `out`
     */
    "Bound": string;
    /**
     * 拦截记录到期时间。
     * @example `1940899881000`
     */
    "ExpireTime": number;
}
