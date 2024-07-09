export interface ListAccessPointsForObjectProcessRequest {
    /**
     * 指定返回对象FC接入点的最大数量。
     * 取值：大于0小于等于1000。
     * > 如果因为max-keys的设置无法一次完成列举，返回结果会附加一个`<NextContinuationToken>`作为下一次列举的continuation-token。
     * @example `10`
     */
    "max-keys"?: number;
    /**
     * 指定List操作需要从此token开始。您可以从返回结果中的NextContinuationToken获取此token。
     * @example `abc`
     */
    "continuation-token"?: string;
}
