export interface ModifyCollationTimeZoneResponse {
    /**
     * 系统字符集排序规则。
     * @example `Chinese_PRC_CS_AS`
     */
    Collation: string;
    /**
     * 实例ID。
     * @example `rm-bp15qi0nd1u27****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `58D48758-F035-52D3-A4FB-80C73DA3E95C`
     */
    RequestId: string;
    /**
     * 时区。
     * @example `China Standard Time`
     */
    Timezone: string;
    /**
     * 任务ID。
     * @example `56365****`
     */
    TaskId: string;
}
