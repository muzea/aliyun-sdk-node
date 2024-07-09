export interface GetServiceConsumersPageRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "region"?: string;
    /**
     * 命名空间ID。
     * @example `cn-hangzhou:doc-test`
     */
    "namespace"?: string;
    /**
     * 数据来源，取值如下：
     * - agent：新版服务查询需要传递。
     * - registry：旧版服务查询传递。
     * @example `agent`
     */
    "origin"?: string;
    /**
     * 服务类型。
     * @example `dubbo`
     */
    "serviceType"?: string;
    /**
     * 应用ID。
     * @example `efbda488-7b33-432f-a40d-****0047****`
     */
    "appId"?: string;
    /**
     * 来源，固定值：edas。
     * @example `edas`
     */
    "source"?: string;
    /**
     * 服务ID。已废弃，无需设置。
     * @example `com.alibabacloud.hipstershop.CartService`
     */
    "serviceId"?: string;
    /**
     * 服务名。
     * @example `com.alibabacloud.hipstershop.CartService`
     */
    "serviceName"?: string;
    /**
     * 服务版本。
     * @example `1.0.0`
     */
    "serviceVersion"?: string;
    /**
     * 分组。
     * @example `DUBBO`
     */
    "group"?: string;
    /**
     * 服务提供者IP，支持模糊查询。
     * @example `10.20.x.xx`
     */
    "ip"?: string;
    /**
     * 注册类型。已废弃，无需设置。
     * @example `nacos`
     */
    "registryType"?: string;
    /**
     * 页码。
     * @example `0`
     */
    "page"?: number;
    /**
     * 页大小。
     * @example `10`
     */
    "size"?: number;
}
