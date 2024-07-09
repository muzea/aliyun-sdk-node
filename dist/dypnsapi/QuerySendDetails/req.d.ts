export interface QuerySendDetailsRequest {
    /**
     * 手机号。
     * @example `186****9399`
     */
    "PhoneNumber": string;
    /**
     * 短信发送日期，支持查询最近30天的记录。
     * 格式为：yyyyMMdd，例如20181225。
     * @example `20181225`
     */
    "SendDate": string;
    /**
     * 业务的唯一标识号，由阿里云提供。
     * @example `1231891289318923^12`
     */
    "BizId"?: string;
    /**
     * 分页大小。
     * @example `50`
     */
    "PageSize": number;
    /**
     * 当前读取第几页消息，从1开始递增，读取消息时不可超过最大页数。
     * @example `1`
     */
    "CurrentPage": number;
}
