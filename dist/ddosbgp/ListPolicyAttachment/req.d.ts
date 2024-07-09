export interface ListPolicyAttachmentRequest {
    /**
     * 策略ID。
     * @example `f38f6520-92b7-451e-b520-9ab3********`
     */
    "PolicyId"?: string;
    /**
     * 策略类型，取值
     * - **default**：表示默认防护策略
     * - **l3**：表示IP防护策略
     * - **l4**：表示端口防护策略
     * @example `l3`
     */
    "PolicyType"?: string;
    /**
     * 防护对象列表。
     */
    "IpPortProtocolList"?: {
        /**
         * 防护对象的IP地址。
         * @example `47.118.172.***`
         */
        Ip: string;
        /**
         * 防护对象的端口号。
         * @example `8*`
         */
        Port: number;
        /**
         * 防护对象的协议类型，取值：
         * - **tcp**：表示传输控制协议。
         * - **udp**：表示用户数据报协议。
         * @example `tcp`
         */
        Protocol: string;
    }[];
    /**
     * 分页查询时，设置当前页面的页码。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页查询时每页的行数。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
