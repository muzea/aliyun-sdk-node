export interface ModifyReservedInstanceAttributeRequest {
    /**
     * 资源所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 预留实例券ID。
     * @example `ecsri-uf61hdhue4kcorqsk****`
     */
    "ReservedInstanceId": string;
    /**
     * 预留实例券的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `testReservedInstanceName`
     */
    "ReservedInstanceName"?: string;
    /**
     * 预留实例券的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * 默认值：空。
     * @example `ri-example`
     */
    "Description"?: string;
}
