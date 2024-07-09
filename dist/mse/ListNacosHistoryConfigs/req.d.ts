export interface ListNacosHistoryConfigsRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{\"appGroup\":\"aliyun-phecda-service-staging\",\"appName\":\"aliyun-phecda-service\",\"appStage\":\"DAILY\",\"appUnit\":\"center\",\"bucId\":\"250858\",\"bucName\":\"阿里云\",\"provider\":\"aliyun\"}`
     */
    "RequestPars"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNum": number;
    /**
     * 每页显示记录条数。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 实例ID。
     * @example `mse-cn-2r42e3bk20n`
     */
    "InstanceId": string;
    /**
     * 集群所在地域，MSE支持的地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据ID。
     * @example `user-prod.yaml`
     */
    "DataId"?: string;
    /**
     * 配置组。
     * @example `fc-dev-cluster-1`
     */
    "Group"?: string;
    /**
     * 命名空间ID。
     * @example `fc0f6e40-****-946b-45e3af313707`
     */
    "NamespaceId"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
