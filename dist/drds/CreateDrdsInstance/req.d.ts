export interface CreateDrdsInstanceRequest {
    /**
     * 实例描述，需满足如下要求：
     * - 不能以http://或https://开头。
     * - 必须以字母或中文开头，可包含大小写字母、中文、数字、下划线（_）或短划线（-）。
     * - 长度为2~256个字符。
     * @example `test`
     */
    "Description": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-e`
     */
    "ZoneId": string;
    /**
     * 实例类型，仅支持PRIVATE，即专享实例。
     * > 您也可以传入1表示专享实例。
     * @example `PRIVATE`
     */
    "Type": string;
    /**
     * 创建实例的数量，仅支持传入1，即一次只能创建一个实例。
     * @example `1`
     */
    "Quantity": number;
    /**
     * 实例系列参数，取值范围如下：
     * - **drds.sn2.4c16g**：入门版
     * - **drds.sn2.8c32g**：标准版
     * - **drds.sn2.16c64g**：企业版
     * @example `drds.sn2.4c16g`
     */
    "InstanceSeries": string;
    /**
     * 实例规格码，取值由实例系列加具体实例规格组成，例如drds.sn2.4c16g.8c32g。
     * @example `drds.sn2.4c16g.8C32g`
     */
    "Specification": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `c1dd299c-10c6-11ea-bbbb-************`
     */
    "ClientToken": string;
    /**
     * 付费类型，取值范围如下：
     * - **drdsPre**：包年包月（也称预付费）。
     * - **drdsPost**：按量付费（也称后付费）。
     * - **drdsRo**：创建只读实例时，默认按量付费模式。
     * @example `drdsPost`
     */
    "PayType": string;
    /**
     * 专有网络ID。
     * @example `vpc-**********`
     */
    "VpcId"?: string;
    /**
     * 虚拟交换机ID。
     * @example `vsw-**********`
     */
    "VswitchId"?: string;
    /**
     * 是否为高可用实例。
     * @example `true`
     */
    "isHa"?: boolean;
    /**
     * 指定预付费实例为包年或包月类型，取值范围如下：
     * - **year**：年
     * - **month**：月
     * > 若付费类型为drdsPre，该参数为必传参数。
     * @example `month`
     */
    "PricingCycle"?: string;
    /**
     * 包年或包月实例的购买时长。
     * - 当PricingCycle为year时，取值范围为1~3。
     * - 当PricingCycle为month时，取值范围为1~9。
     * > 仅当付费类型是drdsPre时该参数生效。
     * @example `1`
     */
    "Duration"?: number;
    /**
     * 是否自动续费，取值范围如下：
     * - **true**：如果按月购买则自动续费一个月，如果按年购买则自动续费一年。
     * - **false**：不自动续费。
     * > 仅当付费类型为drdsPre时该参数生效。
     * @example `true`
     */
    "IsAutoRenew"?: boolean;
    /**
     * 主实例ID，仅在创建只读实例时填写。
     * @example `drds***********`
     */
    "MasterInstId"?: string;
    /**
     * 实例支持的MySQL版本，取值范围如下：
     * - **5**：与MySQL 5.x完全兼容（默认）
     * - **8**：与MySQL 8.0完全兼容
     * > 仅当创建主实例时该参数生效，只读实例的MySQL版本默认与主实例相同。
     * @example `5`
     */
    "MySQLVersion"?: number;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
}
