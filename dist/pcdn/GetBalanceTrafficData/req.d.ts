export interface GetBalanceTrafficDataRequest {
    /**
     * 版本号。
     * @example `2017-04-11`
     */
    "Version": string;
    /**
     * 查询数据的时间粒度，支持**300**、**3600**、**14400**、**28800**和**86400**秒。
     * > 当不传该参数和所传的值不支持时，使用默认值**300**秒。
     * @example `300`
     */
    "DataInterval"?: number;
    /**
     * 当前账单的资源ID。
     * @example `abcde123`
     */
    "ResourceId": string;
}
