export interface GetSasContainerWebDefenseRuleApplicationResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `09969D2C-4FAD-429E-BFBF-9A60DEF8****`
     */
    RequestId: string;
    /**
     * 应用列表。
     */
    ContainerWebDefenseAppList: {
        /**
         * 应用的创建时间（毫秒）。
         * @example `1677839038000`
         */
        GmtCreate: number;
        /**
         * 用户ID。
         * @example `5944922169365****`
         */
        AliUid: number;
        /**
         * 应用标签值。
         * @example `app:test`
         */
        Tag: string;
        /**
         * 最新一次修改时间（毫秒）。
         * @example `1667891185000`
         */
        GmtModified: number;
        /**
         * 当前节点的ID。
         * @example `143761`
         */
        Id: number;
        /**
         * 规则ID。
         * @example `403327`
         */
        RuleId: number;
        /**
         * 容器集群的ID。
         * > 您可以调用[DescribeGroupedContainerInstances](~~182997~~)接口获取该参数。
         * @example `cfb41a869c71e4678a97021582dd8****`
         */
        ClusterId: string;
    }[];
}
