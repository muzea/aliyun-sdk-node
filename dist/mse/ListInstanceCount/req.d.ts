export interface ListInstanceCountRequest {
    /**
     * 集群类型，包括ZooKeeper、Nacos-Ans。
     * @example `Nacos-Ans`
     */
    "ClusterType"?: string;
    /**
     * 集群版本类型，取值如下：
     * - `mse_dev`：表示开发版。
     * - `mse_pro`：表示专业版。
     * @example `mse_pro`
     */
    "MseVersion"?: string;
    /**
     * 集群所在地域，包括但不限于如下地域：
     * - cn-hangzhou：杭州
     * - cn-beijing：北京
     * - cn-shanghai：上海
     * - cn-zhangjiakou：张家口
     * - cn-shenzhen：深圳
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 返回信息的语言类型。
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
