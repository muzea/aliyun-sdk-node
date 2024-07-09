export interface DescribeParameterTemplatesRequest {
    /**
     * 实例所属地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `pxc-********`
     */
    "DBInstanceId": string;
    /**
     * 参数级别，取值如下：
     * - **compute**：计算层；
     * - **storage**：存储层。
     * @example `compute`
     */
    "ParamLevel"?: string;
}
