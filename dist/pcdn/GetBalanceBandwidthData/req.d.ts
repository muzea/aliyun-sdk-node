export interface GetBalanceBandwidthDataRequest {
    /**
     * 版本号。
     * @example `2017-04-11`
     */
    "Version": string;
    /**
     * 查询数据的时间粒度，支持300、3600、14400、28800和86400秒。
     * 不传和传的值不支持时，使用默认值300秒。
     * @example `300`
     */
    "DataInterval"?: number;
    /**
     * 当前账单的资源ID。
     * @example `xxx`
     */
    "ResourceId": string;
}
