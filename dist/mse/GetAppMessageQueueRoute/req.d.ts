export interface GetAppMessageQueueRouteRequest {
    /**
     * 集群所在地域，包括但不限于如下地域：
     * - `cn-hangzhou`：杭州
     * - `cn-beijing`：北京
     * - `cn-shanghai`：上海
     * - `cn-zhangjiakou`：张家口
     * - `cn-shenzhen`：深圳
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 应用ID。
     * @example `hkhon1po62@c3df23522baa898`
     */
    "AppId": string;
    /**
     * MSE命名空间名字
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 应用名称
     * @example `example-app`
     */
    "AppName"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
