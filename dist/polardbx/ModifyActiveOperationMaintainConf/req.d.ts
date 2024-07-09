export interface ModifyActiveOperationMaintainConfRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 循环模式：Week，周。
     * @example `Week`
     */
    "CycleType": string;
    /**
     * 周选择 ：1-7。
     * @example `1,2,3,4,5,6,7`
     */
    "CycleTime": string;
    /**
     * 开始时间。
     * @example `02:00:00Z`
     */
    "MaintainStartTime": string;
    /**
     * 结束时间。
     * @example `02:00:00Z`
     */
    "MaintainEndTime": string;
    /**
     * 是否开启：
     * - **1**： 开启
     * - **0**： 关闭
     * @example `1`
     */
    "Status": number;
}
