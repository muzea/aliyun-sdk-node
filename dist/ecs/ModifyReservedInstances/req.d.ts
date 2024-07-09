export interface ModifyReservedInstancesRequest {
    /**
     * 预留实例券所属的地域ID。
     * 您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 预留实例券ID。N的取值范围：1~20。
     * @example `ReservedInstanceId.1="ecsri-bp1cx3****",ReservedInstanceId.2="ecsri-bp15xx2****"......`
     */
    "ReservedInstanceId": string[];
    /**
     * 预留实例券的配置信息列表。
     */
    "Configuration"?: {
        /**
         * 预留实例券的名称。N的取值范围：1~100。
         * 长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
         * @example `testReservedInstanceName`
         */
        ReservedInstanceName: string;
        /**
         * 预留实例券所属的可用区编号。N的取值范围：1~100
         * `Scope`参数值为`Zone`时，该参数为必填参数。
         * 您可以调用[DescribeZones](~~25609~~)获取可用区列表。
         * @example `cn-hangzhou-i`
         */
        ZoneId: string;
        /**
         * 预留实例券的范围。取值范围：
         * - Region：地域级别
         * - Zone：可用区级别
         * N的取值范围：1~100。
         * 默认值：Region。
         * @example `Zone`
         */
        Scope: string;
        /**
         * 预留实例券可以同时匹配的实例规格。N的取值范围：1~100。
         * > 适用的实例规格持续更新，详情请参见[预留实例券概述](~~100370~~)的预留实例券属性章节。
         * @example `ecs.c5.4xlarge `
         */
        InstanceType: string;
        /**
         * 预留实例券可以同时匹配同规格按量付费实例的数量。取值范围：≥1。N的取值范围：1~100。
         * @example `1`
         */
        InstanceAmount: number;
    }[];
}
