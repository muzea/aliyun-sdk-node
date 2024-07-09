export interface ListVoicemailsRequest {
    /**
     * 呼叫中心实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，范围1-100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 获取的历史数据的起始时间，默认为当天的0时。
     * @example `1532448000000`
     */
    "StartTime"?: number;
    /**
     * 获取的历史数据的终止时间，默认为当前时间。
     * @example `1532707199000`
     */
    "EndTime"?: number;
    /**
     * 通过指定的contactId来查询某一通电话的记录，contactId可以通过软电话SDK发生通话时获取到。如果传入该参数，则自动忽略其他查询参数。
     * @example `job-125152394144124921`
     */
    "ContactId"?: string;
    /**
     * 主叫号码。
     * @example `073xxxx7539`
     */
    "Caller"?: string;
    /**
     * 语音信箱名称。
     * @example `voicemail-test`
     */
    "Name"?: string;
}
