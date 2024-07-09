export interface ModifyInstanceMaintainTimeRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 可维护时间段的开始时间，格式为<i>HH:mm</i>Z（UTC时间）。例如，需要在北京时间凌晨1点开始，应设置为`17:00Z`。调用该接口后，您可以到控制台查看实际时间，详情请参见[设置可维护时间段](~~55252~~)。
     * @example `03:00Z`
     */
    "MaintainStartTime": string;
    /**
     * 可维护时间段的结束时间，格式为<i>HH:mm</i>Z（UTC时间）。例如，需要在北京时间凌晨2点结束，应设置为`18:00Z`。
     * > 开始时间和结束时间的间隔不能低于1小时。
     * @example `04:00Z`
     */
    "MaintainEndTime": string;
}
