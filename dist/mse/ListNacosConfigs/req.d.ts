export interface ListNacosConfigsRequest {
    /**
     * 扩展请求参数，支持JSON格式。
     * @example `{\"appGroup\":\"sm_zk_asi_na610\",\"appName\":\"sm-zk\",\"appStage\":\"PUBLISH\",\"appUnit\":\"center\",\"bucId\":\"193554\",\"bucName\":\"阿里移动事业群-UC\",\"provider\":\"aliyun\"}`
     */
    "RequestPars"?: string;
    /**
     * 分页页码。
     * @example `5`
     */
    "PageNum": number;
    /**
     * 每页大小。
     * @example `200`
     */
    "PageSize": number;
    /**
     * 实例ID。
     * @example `mse-cn-7mz2fj****`
     */
    "InstanceId": string;
    /**
     * 集群所在地域，MSE支持的地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据ID。
     * @example `zeekr-*`
     */
    "DataId"?: string;
    /**
     * 分组类型，默认为`default`。
     * @example `crm`
     */
    "Group"?: string;
    /**
     * 应用名。
     * @example `fpx-pds-pns`
     */
    "AppName"?: string;
    /**
     * 标签。
     * @example `billing`
     */
    "Tags"?: string;
    /**
     * 命名空间ID。
     * @example `fad732a7-ff1a-4f21-8126-4edd4****`
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
