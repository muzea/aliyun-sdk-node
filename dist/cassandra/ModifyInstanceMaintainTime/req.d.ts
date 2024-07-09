export interface ModifyInstanceMaintainTimeRequest {
    /**
     * 要修改运维时间的集群ID。
     * @example `cds-bp1b**6jco895****`
     */
    "ClusterId": string;
    /**
     * 实例运维开始时间格式为HH:mm。
     * @example `2:00`
     */
    "MaintainStartTime": string;
    /**
     * 实例运维结束时间格式为HH:mm。
     * @example `4:00`
     */
    "MaintainEndTime": string;
}
