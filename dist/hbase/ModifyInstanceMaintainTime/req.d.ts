export interface ModifyInstanceMaintainTimeRequest {
    /**
     * 待修改运维时间的实例ID，可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `ld-bp1b**6jco89****`
     */
    "ClusterId": string;
    /**
     * 实例运维开始时间，格式为HH:mmZ，UTC时间。
     * @example `02:00Z`
     */
    "MaintainStartTime": string;
    /**
     * 实例运维结束时间，格式为HH:mmZ，UTC时间。
     * @example `06:00Z`
     */
    "MaintainEndTime": string;
}
