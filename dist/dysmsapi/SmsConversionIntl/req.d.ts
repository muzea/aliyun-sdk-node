export interface SmsConversionIntlRequest {
    /**
     * 消息ID。
     * @example `1008030300****
    `
     */
    "MessageId": string;
    /**
     * 如果您的用户回复了您发送的消息，则设置为 true。否则，设置为 false。
     * @example `true`
     */
    "Delivered": boolean;
    /**
     * 触达发送目标的时间戳。必须是Unix时间戳，毫秒级别长整型。
     * - 如果不指定该字段：默认当前的时间戳。
     * - 如果指定该字段：该时间戳必须大于发送时间并且小于当前时间戳。
     * @example `1349055900000`
     */
    "ConversionTime"?: number;
}
