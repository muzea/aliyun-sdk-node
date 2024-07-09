export interface PutCustomEventRequest {
    /**
     * 事件信息列表。
     */
    "EventInfo": {
        /**
         * 事件名称。N的取值范围：1~50。
         * @example `myEvent`
         */
        EventName: string;
        /**
         * 发生事件的时间。
         * 格式：`yyyyMMddTHHmmss.SSSZ`（年月日时分秒.毫秒时区）。
         * N的取值范围：1~50。
         * > 您还可以输入Unix时间（例如：1552199984000）。单位：毫秒。
         * @example `20171013T170923.456+0800`
         */
        Time: string;
        /**
         * 应用分组ID。N的取值范围：0~50。
         * 默认值：0.0表示上报的事件不属于任何一个应用分组。
         * @example `123456`
         */
        GroupId: string;
        /**
         * 事件内容。N的取值范围：1~50。
         * @example `IOException`
         */
        Content: string;
    }[];
}
