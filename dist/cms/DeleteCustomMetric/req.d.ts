export interface DeleteCustomMetricRequest {
    /**
     * 应用分组ID。
     * @example `3607****`
     */
    "GroupId": string;
    /**
     * 监控项的名称。
     * @example `AdvanceCredit`
     */
    "MetricName": string;
    /**
     * 消息摘要算法，可以产生一个128位（16字节）的散列值，用来校验上报的自定义监控数据的唯一性。
     * > 当查询自定义监控项时，会返回`Md5`。
     * @example `38796C8CFFEB8F89BB2A626C7BD7****`
     */
    "Md5"?: string;
    /**
     * 发起请求申请时的UUID。
     * > 查询自定义监控项时，会返回`UUID`，建议您使用`Md5`。
     * @example `5497633c-66c5-4eae-abaa-89db5adb****`
     */
    "UUID"?: string;
}
