export interface CreateAndroidInstanceGroupRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "BizRegionId": string;
    /**
     * 实例组名称。
     * >
     * > - 实例组名称长度不超过30个字符；请以大/小写字母或中文开头，不能以http://和https://开头，仅支持中文、英文、数字、半角冒号（:）、下划线（_）、点号（.）或者连字符（-）
     * @example `云手机A`
     */
    "InstanceGroupName"?: string;
    /**
     * 实例组中的实例数量。
     * @example `1`
     */
    "NumberOfInstances"?: number;
    /**
     * 计费类型。
     * @example `PostPaid`
     */
    "ChargeType"?: string;
    /**
     * 购买资源的时长，单位由PeriodUnit指定。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 购买资源的时长单位。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 实例组规格。
     * @example `acp.basic.small`
     */
    "InstanceGroupSpec": string;
    /**
     * 是否自动付费。默认为false。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 是否开启自动续费。默认为false。
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 网络ID。
     * @example `cn-hangzhou+dir-745976****`
     */
    "OfficeSiteId"?: string;
    /**
     * 交换机 id。当指定时，选用此交换机来创建实例。
     * @example `vsw-uf61uvzhz8ejaw776****`
     */
    "VSwitchId"?: string;
    /**
     * 策略ID。
     * @example `pg-b7bxrrwxkijjh****`
     */
    "PolicyGroupId": string;
    /**
     * 镜像ID。
     * @example `imgc-06zyt9m93zwax****`
     */
    "ImageId": string;
    "Amount"?: number;
}
