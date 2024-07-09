export interface DescribeSophonCommandsResponse {
    /**
     * 返回的命令列表。
     */
    Data: {
        /**
         * 命令名称。
         * @example `waf_process_ip_v2`
         */
        Name: string;
        /**
         * 命令的显示名称。
         * @example `WAF Process IP`
         */
        DisplayName: string;
        /**
         * 参数配置信息。
         */
        ParamConfig: {
            /**
             * 是否必填，取值：
             * - **true**（默认）：必填。
             * - **false**：非必填。
             * @example `true`
             */
            Necessary: boolean;
            /**
             * 参数字段名称。
             * @example `ip`
             */
            Field: string;
            /**
             * 参数值。
             * @example `12.xx.xx.xx`
             */
            Value: string;
            /**
             * 字段格式校验，正则匹配的方式，如果为空，表示不进行校验。
             * @example `[0-9]{4}\.[0-9]{4}\.[0-9]{4}\.[0-9]{4}`
             */
            CheckField: string;
        }[];
        /**
         * 命令描述。
         * @example `This is a action of processing for WAF`
         */
        Description: string;
    }[];
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `1E1EC464-3BD7-518F-9937-BCC12E6855FE`
     */
    RequestId: string;
}
