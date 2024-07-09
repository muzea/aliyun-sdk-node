export interface QueryInstanceNcdRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 实例1ID
     * @example `lni-1235****`
     */
    "InstanceId1": string;
    /**
     * 实例2ID
     * @example `lni-1234****`
     */
    "InstanceId2": string;
    /**
     * 实例类型
     * @example `lni`
     */
    "InstanceType": string;
}
