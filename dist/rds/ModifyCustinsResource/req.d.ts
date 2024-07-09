export interface ModifyCustinsResourceRequest {
    /**
     * 实例ID。可调用[describedbinstances](~~26232~~)获取。
     * @example `rm-j5ekvfeengm******`
     */
    "DBInstanceId": string;
    /**
     * 资源类型
     * @example `Memory`
     */
    "ResourceType"?: string;
    /**
     * 增加率，单位：%
     * @example `10`
     */
    "IncreaseRatio"?: string;
    /**
     * 调整时间
     * @example `2022-12-31 23:59:06`
     */
    "AdjustDeadline"?: string;
    /**
     * 原值。**resourcetype**=**instance**时需要传入该参数。
     * @example `200`
     */
    "RestoreOriginalSpecification"?: string;
    /**
     * 目标值，适用于目标追踪规则和预测规则。TargetValue最多保留小数点后三位，且必须大于0。
     * @example `3000`
     */
    "TargetValue"?: number;
}
