export interface ListErRouteEntriesResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `success`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `A88DFED5-24B7-5A3E-87DE-380BF06F3C90`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 总记录数
         * @example `0`
         */
        Total: number;
        /**
         * 灵骏HUB路由条目信息列表
         */
        Data: {
            /**
             * 灵骏HUB实例ID
             * @example `er-kkopgtne`
             */
            ErId: string;
            /**
             * 租户ID
             * @example `1111156667137893`
             */
            TenantId: string;
            /**
             * 资源所属租户ID
             * @example `1111156667137893
            `
             */
            ResourceTenantId: string;
            /**
             * 地域
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 路由条目ID
             * @example `er-rte-maysfadg`
             */
            ErRouteEntryId: string;
            /**
             * 目的网段
             * @example `100.64.1.100/32`
             */
            DestinationCidrBlock: string;
            /**
             * 下一跳实例类型
             * @example `VCC`
             */
            NextHopType: string;
            /**
             * 下一跳实例
             * @example `vcc-cn-209300qha01`
             */
            NextHopId: string;
            /**
             * 路由类型
             * @example `VCC`
             */
            RouteType: string;
            /**
             * 状态。可取值：
             *  - Synchronizing
             *  - Available
             * @example `Available`
             */
            Status: string;
            /**
             * 更新时间
             * @example `1640930901000`
             */
            GmtModified: string;
            /**
             * 资源组实例ID
             */
            ResourceGroupId: string;
        }[];
    };
}
