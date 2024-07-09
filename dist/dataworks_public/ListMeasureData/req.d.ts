export interface ListMeasureDataRequest {
    /**
     * 计量项，取值如下：
     * - DideAlarmPhone: 电话告警
     * - DideAlarmSms: 短信告警
     * @example `DideAlarmPhone`
     */
    "DomainCode": string;
    /**
     * 计量组件,取值如下:
     * - Count: DideAlarmPhone电话告警条数、DideAlarmSms短信告警条数
     * @example `Count`
     */
    "ComponentCode": string;
    /**
     * 计量周期开始时间戳(毫秒),计量周期是按照天统计, EndTime - StartTime 仅能查询最近30天的数据。
     * @example `1717344000000`
     */
    "StartTime": number;
    /**
     * 计量周期截止时间戳(毫秒),计量周期是按照天统计, EndTime - StartTime 仅能查询最近30天的数据。
     * @example `1717430400000`
     */
    "EndTime": number;
}
