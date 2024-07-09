export interface ListInstancesByNcdRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 实例ID
     * @example `lni-1234****`
     */
    "InstanceId": string;
    /**
     * 实例类型
     * @example `lni`
     */
    "InstanceType": string;
    /**
     * 最大网络通信距离
     * @example `2`
     */
    "MaxNcd": number;
}
