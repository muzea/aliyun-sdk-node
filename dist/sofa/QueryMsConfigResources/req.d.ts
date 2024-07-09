export interface QueryMsConfigResourcesRequest {
    /**
     * 应用名
     * @example `foo`
     */
    "AppName"?: string;
    /**
     * 系统字段：环境实例 ID
     * @example `abcdEFGH1234`
     */
    "InstanceId": string;
    /**
     * 资源 ID 模糊查询关键字
     * @example `com.alipay.drmResource`
     */
    "Keyword"?: string;
    /**
     * 分页参数，第几页
     * @example `1`
     */
    "PageNum": number;
    /**
     * 分页参数，分页大小。默认值为 10
     * @example `10`
     */
    "PageSize"?: string;
}
