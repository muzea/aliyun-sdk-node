export interface ListEventStreamingsRequest {
    /**
     * 名称。
     * @example `name`
     */
    "NamePrefix"?: string;
    /**
     * 限定每次返回的最大条数，可以和NextToken搭配使用实现翻页能力。
     * ><notice>每次返回的最大条数不超过100。></notice>
     * @example `10`
     */
    "Limit"?: number;
    /**
     * 当指定Limit时，如果还有多余的返回值则会返回NextToken。
     * @example `10`
     */
    "NextToken"?: string;
    /**
     * 事件源Arn。
     * @example `acs:alikafka:cn-hangzhou:118609547428****:instance/alikafka_pre-cn-zxu36kvi****​/topic/test-topic`
     */
    "SourceArn"?: string;
    /**
     * 事件目标Arn。
     * @example `acs:fc:cn-hangzhou:118609547428****:services/fw1.LATEST/functions/log1`
     */
    "SinkArn"?: string;
}
