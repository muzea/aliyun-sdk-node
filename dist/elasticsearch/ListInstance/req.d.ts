export interface ListInstanceRequest {
    /**
     * 实例列表的页码。
     * 起始值：**1**，默认值：**1**。
     * @example `1`
     */
    "page"?: number;
    /**
     * 分页查询时设置的每页条数。最大值：**100**，默认值：**10**。
     * @example `10`
     */
    "size"?: number;
    /**
     * 实例名称，支持模糊查询。例如搜索**abc**的所有实例，则可能返回**abc**、**abcde**、**xyabc**、**xabcy**的所有实例。
     * @example `aliyunes_test1`
     */
    "description"?: string;
    /**
     * 实例ID。
     * @example `es-cn-v641a0ta3000g****`
     */
    "instanceId"?: string;
    /**
     * 实例版本。
     * @example `6.7_with_X-Pack`
     */
    "esVersion"?: string;
    /**
     * 实例所在的资源组ID。
     * @example `rg-aekzvowej3i****`
     */
    "resourceGroupId"?: string;
    /**
     * 实例标签。
     * @example `[{"tagKey":"key1","tagValue":"value1"}]`
     */
    "tags"?: string;
    /**
     * 实例所在的专有网络ID。
     * @example `vpc-bp16k1dvzxtmagcva****`
     */
    "vpcId"?: string;
    /**
     * 实例所在的可用区ID。
     * @example `cn-hangzhou-i`
     */
    "zoneId"?: string;
    /**
     * 实例的付费类型。可选值：
     * - postpaid：按量付费
     * - prepaid：包年包月
     * @example `postpaid`
     */
    "paymentType"?: string;
    /**
     * 实例版本类型。可选值：
     * - x-pack：商业版
     * - advanced/IS：增强版
     * - community：基础版
     * @example `advanced`
     */
    "instanceCategory"?: string;
}
