export interface DescribeClassListRequest {
    /**
     * 商品节点数量。取值范围如下：
     * - single: 单节点。
     * - cluster: 集群版。
     * - all: 单节点和集群版。
     * @example `cluster`
     */
    "MasterHa"?: string;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
    /**
     * 商品Code。取值范围如下：
     * * polardb_sub：中国内地包年包月。
     * * polardb_sub _intl：中国香港及海外包年包月。
     * * polardb_payg：中国内地按量付费。
     * * polardb_payg_intl：中国香港及海外按量付费。
     * * polardb_sub_jushita：聚石塔包年包月。
     * * polardb_payg_jushita：聚石塔按量付费。
     * * polardb_sub_cainiao：菜鸟包年包月。
     * * polardb_payg_cainiao：菜鸟按量付费。
     * >- 如果您使用的是阿里云国内站账号，只能查看国内的商品Code。
     * >- 如果您使用的是阿里云国际站账号，只能查看国际的商品Code。
     * >- 如果您使用的是聚石塔账号，只能查看聚石塔的商品Code。
     * >- 如果您使用的是菜鸟账号，只能查看菜鸟的商品Code。
     * @example `polardb_sub`
     */
    "CommodityCode": string;
    /**
     * 订单类型。取值范围如下：
     * * BUY：新购。
     * * UPGRADE：变更配置。
     * * RENEW：续费。
     * * CONVERT：转换付费类型。
     * @example `BUY`
     */
    "OrderType"?: string;
    /**
     * 地域ID。
     * > 如果您使用的是阿里云国际站账号，该参数必填。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
