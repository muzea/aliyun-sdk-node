export interface GetModuleConfigResponse {
    /**
     * 响应码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `291B49F9-1685-4005-9D34-606B6F78****`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
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
             * @example `5562414`
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
             * @example `2.2.X.X`
             */
            Ip: string;
            /**
             * 服务器实例的ID。
             * @example `i-uf6435dn4t59b9av****`
             */
            InstanceId: string;
        }[];
    }[];
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 分页查询的当前页显示数据条数。
         * @example `100`
         */
        Count: number;
    };
}
