export interface ListErsResponse {
    /**
     * 响应状态码。
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因。）
     * @example `成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `AC8C713A-A9F4-5984-A5E1-76496DF35153`
     */
    RequestId: string;
    /**
     * 响应内容。
     */
    Content: {
        /**
         * 总记录数。
         * @example `1`
         */
        Total: number;
        /**
         * 灵骏HUB信息列表。
         */
        Data: {
            /**
             * 创建时间。
             * @example `1640930671000`
             */
            CreateTime: string;
            /**
             * 修改时间。
             * @example `1640930671000`
             */
            GmtModified: string;
            /**
             * 提示信息。
             * @example `成功`
             */
            Message: string;
            /**
             * 灵骏HUB实例ID。
             * @example `er-kkop****`
             */
            ErId: string;
            /**
             * 地域ID。
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 租户ID。
             * @example `165544950****`
             */
            TenantId: string;
            /**
             * 状态。
             * @example `Available`
             */
            Status: string;
            /**
             * 灵骏HUB实例名称。
             * @example `er-wulanchabu-main`
             */
            ErName: string;
            /**
             * 主可用区。
             * @example `cn-wulanchabu-b`
             */
            MasterZoneId: string;
            /**
             * 描述。
             * @example `描述`
             */
            Description: string;
            /**
             * 灵骏HUB网络实例连接数。
             * @example `2`
             */
            Connections: number;
            /**
             * 灵骏HUB路由策略数量。
             * @example `2`
             */
            RouteMaps: number;
            /**
             * 资源组实例ID
             */
            ResourceGroupId: string;
        }[];
    };
}
