export interface ListApplicationConfigsResponse {
    /**
     * 应用配置列表。
     */
    ApplicationConfigs: {
        /**
         * 应用名称。
         * @example `HDFS`
         */
        ApplicationName: string;
        /**
         * 配置文件名称。
         * @example `hdfs-site.xml`
         */
        ConfigFileName: string;
        /**
         * 配置项键。
         * @example `dfs.replication
        `
         */
        ConfigItemKey: string;
        /**
         * 配置项值。
         * @example `2`
         */
        ConfigItemValue: string;
        /**
         * 创建时间。
         * @example `1628589439114`
         */
        CreateTime: number;
        /**
         * 更新时间。
         * @example `1628589439114`
         */
        UpdateTime: number;
        /**
         * 修改人。
         * @example `170906468757****`
         */
        Modifier: string;
        /**
         * 是否是自定义配置。
         * @example `false`
         */
        Custom: boolean;
        /**
         * 初始值。
         * @example `2`
         */
        InitValue: string;
        /**
         * 描述。
         * @example `dfs.replication description`
         */
        Description: string;
        /**
         * 配置值生效状态。
         * @example `EFFECT`
         */
        ConfigEffectState: string;
        /**
         * 节点ID。
         * @example `i-bp18y0ng3qqxog4mw****`
         */
        NodeId: string;
        /**
         * 节点组ID。
         * @example `ng-d555335ced5****`
         */
        NodeGroupId: string;
    }[];
    /**
     * 请求ID。
     * @example `9E3A7161-EB7B-172B-8D18-FFB06BA3****`
     */
    RequestId: string;
    /**
     * 下页页码。
     * @example `1`
     */
    NextToken: string;
    /**
     * 分页大小。
     * @example `100`
     */
    MaxResults: number;
    /**
     * 分页总数。
     * @example `100`
     */
    TotalCount: number;
}
