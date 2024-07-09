export interface AttachToPolicyRequest {
    /**
     * 策略ID。
     * @example `cd8b4d70-e4e0-413a-b390-e71d********`
     */
    "PolicyId": string;
    /**
     * 防护对象列表。
     */
    "IpPortProtocolList": {
        /**
         * 防护对象的IP地址。
         * @example `112.124.241.***`
         */
        Ip: string;
        /**
         * 防护对象的端口号。
         * > 仅端口防护策略支持。
         * @example `8*`
         */
        Port: number;
        /**
         * 防护对象的协议类型，取值：
         * - **tcp**：表示传输控制协议。
         * - **udp**：表示用户数据报协议。
         * > 仅端口防护策略支持。
         * @example `tcp`
         */
        Protocol: string;
    }[];
}
