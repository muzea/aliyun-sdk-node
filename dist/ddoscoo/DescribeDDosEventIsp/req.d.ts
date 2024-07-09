export interface DescribeDDosEventIspRequest {
    /**
     * 要查询的攻击事件类型。取值：
     * - **defense**：流量型攻击清洗事件。
     * - **blackhole**：流量型攻击黑洞事件。
     * @example `defense`
     */
    "EventType": string;
    /**
     * 要查询事件的开始时间戳，单位：秒。
     * > 您可以调用[DescribeDDosAllEventList](~~DescribeDDosAllEventList~~)查询所有事件的开始时间信息。
     * @example `1598948471`
     */
    "StartTime": number;
    /**
     * 受攻击的高防IP。
     * @example `203.***.***.199`
     */
    "Ip": string;
    "Range"?: number;
}
