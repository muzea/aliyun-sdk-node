export interface ConvertPostPayOrderRequest {
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例的ID。
     * @example `alikafka_post-cn-v0h1fgs2****`
     */
    "InstanceId": string;
    /**
     * 购买时长。单位为月，默认为1。取值：
     * - **1~12**
     * - **24**
     * - **36**
     * @example `1`
     */
    "Duration"?: number;
}
