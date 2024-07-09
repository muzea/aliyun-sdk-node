export interface DescribeParametersRequest {
    /**
     * 实例所属地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `pxc-********`
     */
    "DBInstanceId": string;
    /**
     * 参数级别，取值：
     * - compute：计算层 ；
     * - storage：存储层。
     * @example `compute`
     */
    "ParamLevel"?: string;
}
