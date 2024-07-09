export interface GetPrivateAccessApplicationResponse {
    /**
     * 本次请求的ID。
     * @example `3ACC5EDC-2B7D-5032-8C58-D7615D66C1D4`
     */
    RequestId: string;
    /**
     * 内网访问应用。
     */
    Application: {
        /**
         * 内网访问应用ID。
         * @example `pa-application-e12860ef6c48****`
         */
        ApplicationId: string;
        /**
         * 内网访问应用名称。
         * @example `private_access_application_name`
         */
        Name: string;
        /**
         * 内网访问应用描述。
         * @example `这是一条内网访问应用`
         */
        Description: string;
        /**
         * 内网访问应用地址集合。
         */
        Addresses: string[];
        /**
         * 内网访问应用端口范围集合。多个端口范围不可重复或重叠。
         */
        PortRanges: {
            /**
             * 起始端口。
             * @example `80`
             */
            Begin: number;
            /**
             * 结束端口。
             * @example `81`
             */
            End: number;
        }[];
        /**
         * 内网访问应用协议。取值：
         * - **All**：全部。
         * - **TCP**。
         * - **UDP**。
         * @example `All`
         */
        Protocol: string;
        /**
         * 内网访问应用状态。取值：
         * - **Enabled**：开启。
         * - **Disabled**：关闭。
         * @example `Enabled`
         */
        Status: string;
        /**
         * 内网访问应用创建时间。
         * @example `2022-08-30 16:50:32`
         */
        CreateTime: string;
        /**
         * 内网访问标签ID集合。
         */
        TagIds: string[];
        /**
         * 内网访问策略ID集合。
         */
        PolicyIds: string[];
        /**
         * ConnectorID集合。
         */
        ConnectorIds: string[];
    };
}
