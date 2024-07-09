export interface DescribeVulTargetConfigResponse {
    /**
     * 查询结果的总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `9FBC6E47-7508-58C9-9E76-528E118CB1CC`
     */
    RequestId: string;
    /**
     * 服务器漏洞配置信息列表。
     */
    TargetConfigs: {
        /**
         * 要查询的漏洞类型。取值：
         * - **cve**：Linux漏洞
         * - **sys**：Windows漏洞
         * - **cms**：WebCMS漏洞
         * - **emg**：应急漏洞
         * @example `cve`
         */
        Type: string;
        /**
         * 全局开关。取值：
         * - **off**：关闭
         * - **on**：开启
         * @example `on`
         */
        OverAllConfig: string;
        /**
         * 机器对应的漏洞开关。
         * - **off**：关闭
         * - **on**：开启
         * @example `on`
         */
        Config: string;
    }[];
}
