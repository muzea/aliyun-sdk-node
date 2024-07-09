export interface DescribeModifyParameterLogRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~196830~~)接口查看目标地域下所有实例的详情，包括实例ID。
     * @example `gp-9dpm71ov2wxxq****`
     */
    "DBInstanceId": string;
    /**
     * 查询开始时间。格式为<i>YYYY-MM-DDThh:mmZ</i>（UTC时间）。
     * @example `2023-01-03T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，格式为<i>YYYY-MM-DDThh:mmZ</i>（UTC时间），且大于查询开始时间。
     * @example `2023-01-03T20:00:00Z`
     */
    "EndTime"?: string;
}
