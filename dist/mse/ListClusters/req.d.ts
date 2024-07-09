export interface ListClustersRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNum": number;
    /**
     * 每页展示集群数。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 集群名字，支持模糊匹配。
     * @example `cluster`
     */
    "ClusterAliasName"?: string;
    /**
     * 集群所在地域，MSE支持的地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组ID。资源组详情请参见查看资源组基本信息。
     * @example `rg-acfmxbzafebvvfa`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表，最多包含20个子项
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。
         * @example `prd`
         */
        Value: string;
    }[];
    "KeyId"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
