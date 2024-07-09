export interface DescribeClustersRequest {
    /**
     * 地域ID，如cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 集群名称
     * @example `test`
     */
    "ClusterName"?: string;
    /**
     * 资源组Id，可在资源组控制台查看可用资源组。
     * @example `rg-xxxxxxxxx`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表
     */
    "Tag"?: {
        /**
         * 自定义标签key
         * @example `key`
         */
        Key: string;
        /**
         * 自定义标签value
         * @example `value`
         */
        Value: string;
    }[];
}
