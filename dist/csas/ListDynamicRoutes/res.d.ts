export interface ListDynamicRoutesResponse {
    /**
     * 本次请求的ID。
     * @example `58D6B23E-E5DA-5418-8F61-51A3B5A30049`
     */
    RequestId: string;
    /**
     * 动态路由的总数。
     * @example `1`
     */
    TotalNum: number;
    /**
     * 动态路由列表。
     */
    DynamicRoutes: {
        /**
         * 动态路由ID。
         * @example `dr-a0ca843f53cf****`
         */
        DynamicRouteId: string;
        /**
         * 动态路由的名称。
         * @example `dynamic_route_name`
         */
        Name: string;
        /**
         * 动态路由的描述。
         * @example `这是一条动态路由`
         */
        Description: string;
        /**
         * 动态路由状态。取值：
         * - **Enabled**：开启。
         * - **Disabled**：关闭。
         * @example `Enabled`
         */
        Status: string;
        /**
         * 动态路由优先级。数字1表示优先级最高。优先级排序和列表查询从上到下保持一致。
         * @example `1`
         */
        Priority: number;
        /**
         * SASE的POP集群接入点支持的地域列表。
         */
        RegionIds: string[];
        /**
         * 动态路由的应用类型。取值：
         * - **All**：全部应用。
         * - **Application**：应用。
         * - **Tag**：标签。
         * @example `Application`
         */
        ApplicationType: string;
        /**
         * 动态路由的内网访问应用ID集合。当应用类型为**Application**时，该字段有值。
         */
        ApplicationIds: string[];
        /**
         * 动态路由的内网访问标签ID集合。当应用类型为**Tag**时，该字段有值。
         */
        TagIds: string[];
        /**
         * 动态路由类型。取值：**connector**：自有专线。
         * @example `connector`
         */
        DynamicRouteType: string;
        /**
         * 动态路由下一跳示例ID。
         * @example `connector-8ccb13b6f52c****`
         */
        NextHop: string;
        /**
         * 动态路由创建时间。
         * @example `2023-03-21 11:50:03`
         */
        CreateTime: string;
    }[];
}
