export interface UpdateAutoResourceOptimizeRulesAsyncRequest {
    /**
     * 备用参数。
     * @example `None`
     */
    "ConsoleContext"?: string;
    /**
     * 数据库实例ID。
     * > 数据格式为JSONArray，例如`['实例ID1','实例ID2']`，实例ID间用英文逗号（,）分隔。
     * @example `['rm-2ze8g2am97624****','rm-2ze9xrhze0709****']`
     */
    "InstanceIds": string;
    /**
     * 触发空间碎片自动回收单个物理表的最小空间，取值范围：**5**~**100**，单位为GB。
     * @example `10`
     */
    "TableSpaceSize": number;
    /**
     * 触发空间碎片自动回收单个物理表的碎片率，取值范围：**0.10**~**0.99**。
     * @example `0.2`
     */
    "TableFragmentationRatio": number;
    /**
     * 异步请求的ID。
     * > 异步调用后不会立即返回完整结果，首先需要调用该接口获取**ResultId**，然后使用返回数据的**ResultId**，重新发起调用，直到**isFinish**取值为**true**时，返回完整结果。即获取一次完整数据，至少需要调用该接口两次。
     * @example `async__507044db6c4eadfa2dab9b084e80****`
     */
    "ResultId"?: string;
}
