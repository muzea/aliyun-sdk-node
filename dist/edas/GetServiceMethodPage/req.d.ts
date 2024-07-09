export interface GetServiceMethodPageRequest {
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
     * 数据来源。取值如下：
     * - agent：新版服务查询需要传递。
     * - registry：旧版服务查询传递。
     * @example `agent`
     */
    "origin"?: string;
    /**
     * 服务类型，支持以下类型：
     * - dubbo：Dubbo服务。
     * - springCloud：SpringCloud服务。
     * - hsf：HSF服务。
     * @example `springCloud`
     */
    "serviceType"?: string;
    /**
     * 应用ID。
     * @example `310b18c3-1dbe-4807-****-18d7d637****`
     */
    "appId"?: string;
    /**
     * 来源，固定值：edas。
     * @example `edas`
     */
    "source"?: string;
    /**
     * 服务ID。
     * @example `edas.service.consumer`
     */
    "serviceId"?: string;
    /**
     * 服务名称。
     * @example `edas.service.consumer`
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
     * IP地址。
     * @example `127.0.0.1`
     */
    "ip"?: string;
    /**
     * 注册中心类型。
     * @example `nacos`
     */
    "registryType"?: string;
    /**
     * 页号。
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 分页大小。
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * controller方法。
     * @example `com.aliware.edas.DemoController`
     */
    "methodController"?: string;
    /**
     * 请求路径。
     * @example `/echo/{str}`
     */
    "path"?: string;
    /**
     * 方法名。
     * @example `echo`
     */
    "name"?: string;
}
