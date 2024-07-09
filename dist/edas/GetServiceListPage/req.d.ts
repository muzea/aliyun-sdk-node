export interface GetServiceListPageRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "region"?: string;
    /**
     * 命名空间。
     * @example `cn-hangzhou:doc-test`
     */
    "namespace"?: string;
    /**
     * 数据来源，取值如下：
     * - `agent`：新版服务查询需要传递。
     * - `registry`：旧版服务查询传递。
     * @example `Agent`
     */
    "origin"?: string;
    /**
     * 服务类型，取值如下：
     * - `dubbo`
     * - `springCloud`
     * - `hsf`
     * - `istio`
     * @example `SpringCloud`
     */
    "serviceType"?: string;
    /**
     *
     * 服务类型，取值如下：
     * - `app`：应用维度查询。
     * - `service`：服务维度查询。
     * - `providerIp`：IP维度查询。
     * @example `App`
     */
    "searchType"?: string;
    /**
     * 搜索关键字：
     * - 如果searchType=app，searchValue填写`appId`。
     * - 如果serachType=service，searchValue填写`serviceName`。
     * - 如果searchType=providerIp，searchValue填写应用IP地址。
     * @example `com.alibaba.edas.HelloService`
     */
    "searchValue"?: string;
    /**
     * 提供者侧或者消费者侧，取值如下：
     * - provider
     * - consumer
     * @example `provider`
     */
    "side"?: string;
    /**
     * 列表的页码，从0开始。
     * @example `0`
     */
    "page"?: number;
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    "size"?: number;
}
