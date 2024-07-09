export interface ListAccessPointsRequest {
    /**
     * 指定返回接入点的最大数量。取值如下：
     * - 获取用户级别接入点时，取值要求大于0小于等于1000。
     * - 获取Bucket级别接入点时，取值要求大于0小于等于100。
     * @example `10`
     */
    "max-keys"?: number;
    /**
     * 指定List操作需要从此token开始。您可从返回结果中的NextContinuationToken获取此token。
     * @example `abc`
     */
    "continuation-token"?: string;
}
