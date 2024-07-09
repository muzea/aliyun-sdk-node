export interface ListSubscriptionByTopicRequest {
    /**
     * 主题的名称。
     * @example `test`
     */
    "TopicName": string;
    /**
     * 分页页码，查询第几页的返回结果。
     * 取值范围：1~100000000。
     * 若您设置的参数值小于1，则系统默认按照参数值为1处理；若您设置的参数值大于100000000，则系统默认按照参数值为100000000处理。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 分页大小，每页最多显示的返回结果数量。
     * 取值范围：10~50。
     * 若您设置的参数值小于10，则系统默认按照参数值为10处理；若您设置的参数值大于50，则系统默认按照参数值为50处理。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * Subscription的名称。
     * @example `demo-subscription`
     */
    "SubscriptionName"?: string;
}
