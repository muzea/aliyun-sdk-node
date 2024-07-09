export interface PutEnableFwSwitchResponse {
    /**
     * 请求ID。
     * @example `B2841452-CB8D-4F7D-B247-38E1CF7334F8`
     */
    RequestId: string;
    /**
     * 资产未同步时的状态信息列表。
     */
    AbnormalResourceStatusList: {
        /**
         * 资产IP。
         * @example `203.0.113.0`
         */
        Resource: string;
        /**
         * 资产未同步时的状态。取值：
         * - ip_not_sync：资产未同步。
         * @example `ip_not_sync`
         */
        Status: string;
        /**
         * 资产未同步时的信息。取值：
         * - cloudfirewall do not sync this ip address：云防火墙没有同步这个资产IP。
         * @example `cloudfirewall do not sync this ip address`
         */
        Msg: string;
    }[];
}
