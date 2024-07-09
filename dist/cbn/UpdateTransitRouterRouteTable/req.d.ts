export interface UpdateTransitRouterRouteTableRequest {
    /**
     * 企业版转发路由器路由表ID。
     * @example `vtb-bp1dudbh2d5na6b50****`
     */
    "TransitRouterRouteTableId": string;
    /**
     * 路由表的名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `testname`
     */
    "TransitRouterRouteTableName"?: string;
    /**
     * 路由表的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `testdesc`
     */
    "TransitRouterRouteTableDescription"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 是否对此次请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认值）：发送正常请求，通过检查后直接修改路由表的名称和描述信息。
     * - **true**：发送检查请求，只进行校验，不会路由表的名称和描述信息。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 路由表功能选项。
     */
    "RouteTableOptions"?: {
        /**
         * 多地域等价路由，取值：
         * - **disable**：关闭多地域等价路由。关闭多地域等价路由后，从不同地域学到的相同前缀的路由在其他路由属性一致的情况下将会优选Region ID最小的TR作为下一跳（按字母排序），此时流量的时延和不同地域间消耗的带宽会发生变化。请确保充分评估后再关闭。
         * - **enable**：开启多地域等价路由。开启多地域等价路由后，从不同地域学到的相同前缀的路由在其他路由属性一致的情况下将会形成等价路由，此时流量的时延和不同地域间消耗的带宽会发生变化。请确保充分评估后再开启。
         * @example `disable`
         */
        MultiRegionECMP: string;
    };
}
