export interface CreateTransitRouterRouteTableRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 自定义路由表名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `testname`
     */
    "TransitRouterRouteTableName"?: string;
    /**
     * 自定义路由表的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `testdesc`
     */
    "TransitRouterRouteTableDescription"?: string;
    /**
     * 企业版转发路由器实例ID。
     * @example `tr-bp1su1ytdxtataupl****`
     */
    "TransitRouterId": string;
    /**
     * 是否对此次创建请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认）：发送正常请求，只进行校验，通过检查后直接创建自定义路由表。
     * - **true**：发送检查请求，只进行校验，不会创建自定义路由表。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回对应请求ID。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 标签信息。
     * 一次最多支持输入20个标签信息。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 一次最多支持输入20个标签的标签键。
         * @example `test`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
         * @example `tagtest`
         */
        Value: string;
    }[];
    /**
     * 路由表功能选项。
     */
    "RouteTableOptions"?: {
        /**
         * 多地域等价路由，取值：
         * - **disable**（默认）：关闭多地域等价路由。关闭多地域等价路由后，从不同地域学到的相同前缀的路由在其他路由属性一致的情况下将会优选Region ID最小的TR作为下一跳（按字母排序），此时流量的时延和不同地域间消耗的带宽会发生变化。请确保充分评估后再关闭。
         * - **enable**：开启多地域等价路由。开启多地域等价路由后，从不同地域学到的相同前缀的路由在其他路由属性一致的情况下将会形成等价路由，此时流量的时延和不同地域间消耗的带宽会发生变化。请确保充分评估后再开启。
         * @example `disable`
         */
        MultiRegionECMP: string;
    };
}
