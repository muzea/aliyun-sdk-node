export interface CheckHadoopNetConnectionRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `gp-xxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * emr实例ID。
     * @example `c-xxx`
     */
    "EmrInstanceId": string;
}
