export interface DescribeDrdsDBsRequest {
    /**
     * 实例ID。
     * @example `drdshbga1138****`
     */
    "DrdsInstanceId": string;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数，取值为**30**、**50**或**100**。
     * 默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
