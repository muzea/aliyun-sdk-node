export interface DescribeReservedInstancesRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 预留实例券列表的页码，起始值：1
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时的每页行数，最大值：100
     * 默认值：10
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 预留实例券的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](~~110425~~)接口进行查询。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 预留实例券的标签值。N的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持128个字符，不能以acs:开头，不能包含http://或者https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 实例所属的可用区编号，当Scope为Zone时必填。更多详情，请参见[DescribeZones](~~25610~~)获取可用区列表。
     * @example `cn-hangzhou-z`
     */
    "ZoneId"?: string;
    /**
     * 预留实例券名称。
     * @example `testReservedInstanceName`
     */
    "ReservedInstanceName"?: string;
    /**
     * 锁定类型。取值范围：
     * - financial：账号欠费或服务过期
     * - security：安全原因
     * @example `security`
     */
    "LockReason"?: string;
    /**
     * 实例资源的规格。取值请参见[实例规格族](~~25378~~)。
     * @example `ecs.g5.large`
     */
    "InstanceType"?: string;
    /**
     * 实例资源的规格族。取值请参见[实例规格族](~~25378~~)。
     * @example `ecs.g5`
     */
    "InstanceTypeFamily"?: string;
    /**
     * 预留实例券的范围。取值范围：
     *
     * - Region：地域级别
     * - Zone：可用区级别
     * 默认值：Region
     * @example `Region`
     */
    "Scope"?: string;
    /**
     * 预留实例券的付款类型。取值范围：
     * - No Upfront：零预付
     * - Partial Upfront：部分预付
     * - All Upfront：全预付
     * @example `All Upfront`
     */
    "OfferingType"?: string;
    /**
     * 分配类型。取值范围：
     * - Normal：查询当前账号下的预留实例券。
     * - Shared：查询当前账号下已经建立主子账号共享的预留实例券。
     * 默认值：Normal
     * @example `Normal`
     */
    "AllocationType"?: string;
    /**
     * 预留实例券ID。N的取值范围：1~100。
     * @example `ri-bpzhex2ulpzf53****`
     */
    "ReservedInstanceId"?: string[];
    /**
     * 预留实例券的状态，N的取值范围：1~100。状态值取值范围：
     * - Creating：正在创建
     * - Active：在有效期中
     * - Expired：已过期
     * - Updating：正在更改预留实例券的属性
     * @example `Active`
     */
    "Status"?: string[];
}
