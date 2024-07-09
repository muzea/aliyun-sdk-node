export interface DescribeModuleConfigResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
     */
    RequestId: string;
    /**
     * 请求是否成功。取值：
     * - **true**：是
     * - **false**：否
     * @example `true`
     */
    Success: boolean;
    /**
     * 模块设置信息个数。
     * @example `2`
     */
    Count: number;
    /**
     * 模块设置信息列表。
     */
    ModuleConfigList: {
        /**
         * 模块名称。
         * @example `alihids`
         */
        ModuleName: string;
        /**
         * 设置的名称。
         * @example `timescan`
         */
        ConfigName: string;
        /**
         * 设置项列表。
         */
        Items: {
            /**
             * 服务器UUID。
             * @example `a47e3713-ed22-4015-93a3-d88ebe6****`
             */
            Uuid: string;
            /**
             * 服务器分组的ID。
             * @example `173`
             */
            GroupId: number;
            /**
             * 服务器实例的名称。
             * @example `inStanceName****`
             */
            InstanceName: string;
            /**
             * 服务器所在的地域。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 服务器的IP。
             * @example `31.13.XX.XX`
             */
            Ip: string;
            /**
             * 服务器实例的ID。
             * @example `i-uf6435dn4t59b9av****`
             */
            InstanceId: string;
        }[];
    }[];
}
