export interface ListPrivateAccessApplicationsForDynamicRouteResponse {
    /**
     * 本次请求的ID。
     * @example `BE4FB974-11BC-5453-9BE1-1606A73EACA6`
     */
    RequestId: string;
    /**
     * 动态路由列表。
     */
    DynamicRoutes: {
        /**
         * 动态路由ID。
         * @example `dr-ca9fddfac7c6****
        `
         */
        DynamicRouteId: string;
        /**
         * 内网访问应用集合。
         */
        Applications: {
            /**
             * 内网访问应用ID。
             * @example `pa-application-7a9243dd02f4****`
             */
            ApplicationId: string;
            /**
             * 内网访问应用名称。
             * @example `application_name`
             */
            Name: string;
            /**
             * 内网访问应用描述。
             * @example `这是一条被动态路由引用的内网访问应用`
             */
            Description: string;
            /**
             * 内网访问应用地址集合。
             */
            Addresses: string[];
            /**
             * 内网访问应用端口范围集合。
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
             * - **TCP**
             * - **UDP**
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
             * @example `2022-04-13 13:33:24`
             */
            CreateTime: string;
        }[];
    }[];
}
