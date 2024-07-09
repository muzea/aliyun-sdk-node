export interface ModifyDBClusterRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * @example `am-bp1u8c0mgfg58****`
     */
    "DBClusterId": string;
    /**
     * 节点组数量，取值范围为：1~200。
     * > Mode取值为Reserver（即预留模式）时，本参数必填。
     * @example `2`
     */
    "DBNodeGroupCount"?: string;
    /**
     * 节点存储空间，取值说明：
     * <props="china">
     * - 规格为C8时，取值范围为：100~1000GB。</props>
     * <props="intl">
     * - 规格为C8时，取值范围为：100~2000GB。</props>
     * - 规格为C32时，取值范围为：100~8000GB。
     * > - Mode取值为Reserver（即预留模式）时，本参数必填。
     * > - 1000GB以下步长为100GB，1000GB以上步长为1000GB。
     * @example `200`
     */
    "DBNodeStorage"?: string;
    /**
     * 节点规格，取值：
     * - **C8**
     * - **C32**
     * > Mode取值为Reserver（即预留模式）时，本参数必填。
     * @example `C32`
     */
    "DBNodeClass"?: string;
    /**
     * 变更类型，取值说明：
     * - **Upgrade**：升级。
     * - **Downgrade**：降级。
     * @example `Upgrade`
     */
    "ModifyType"?: string;
    /**
     * 不涉及。
     * @example `无`
     */
    "ExecutorCount"?: string;
    /**
     * 地域ID，通过[DescribeRegions](~~143074~~)查看可用的地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 不涉及。
     * @example `无`
     */
    "StorageResource"?: string;
    /**
     * 计算资源，您可以调用[DescribeAvailableResource](~~190632~~)接口查询指定地域中可用的计算资源。
     * > Mode取值为Flexible（即弹性模式）时，本参数必填。
     * @example `32Core128GBNEW`
     */
    "ComputeResource"?: string;
    /**
     * 弹性资源单节点规格。取值说明：
     * - **8Core64GB**：单节点规格选择**8Core64GB**时，一组弹性IO资源的规格为24Core192 GB。
     * - **12Core96GB**：单节点规格选择**12Core96GB**时，一组弹性IO资源的规格为36Core288 GB。
     * > 仅当集群满足如下条件时，支持该配置。
     * > - 集群系列需为弹性模式。
     * > - 华南3（广州）、华南1（深圳）、华东1（杭州）、华东2（上海）、华北1（青岛）、华北2（北京）和华北3（张家口）地域计算资源为16核64 GB（集群版）或以上规格的集群。
     * > - 其他地域计算资源为32核128 GB或以上规格的集群。
     * @example `8Core64GB`
     */
    "ElasticIOResourceSize"?: string;
    /**
     * 弹性IO资源的数量。不同的弹性IO资源规格，可购买的数量不同。
     * - 弹性IO资源规格为8核64 GB，最多可购买32组。
     * - 弹性IO资源规格为12核96 GB，最多可购买16组。
     * @example `2`
     */
    "ElasticIOResource"?: number;
    /**
     * 系列。取值说明：
     * - **Cluster**：预留模式集群版。
     * <props="china">
     * > 仅中国内地地域和新加坡地域支持购买预留模式集群版。其中，新加坡地域仅支持在按量付费模式下购买预留模式集群版。</props>
     * - **MixedStorage**：弹性模式集群版（新版）。
     * > 当DBClusterCategory为Cluster时，Mode参数必须填写Reserver；当DBClusterCategory为MixedStorage时，Mode参数必须填写Flexible，否则会导致创建集群失败。
     * @example `MixedStorage`
     */
    "DBClusterCategory"?: string;
    /**
     * 模式。取值说明：
     * - **Reserver**：预留模式。
     * - **Flexible**：弹性模式。
     * @example `Flexible`
     */
    "Mode"?: string;
    /**
     * 云盘PL等级。取值可选：
     * - PL0
     * - PL1
     * - PL2
     * - PL3
     * @example `PL1`
     */
    "DiskPerformanceLevel"?: string;
}
