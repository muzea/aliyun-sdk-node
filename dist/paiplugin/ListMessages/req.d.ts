export interface ListMessagesRequest {
    /**
     * 发送日期，格式为yyyymmdd。
     * @example `20220101`
     */
    "Datetime": string;
    /**
     * 短信错误码过滤。
     * @example `DELIVERED`
     */
    "ErrorCode"?: string;
    /**
     * 关联人群ID过滤。
     * @example `10ed87f5-3ca8-4a43-9d83-b30519be7241`
     */
    "GroupId"?: string;
    /**
     * 短信ID过滤，短信ID为SendMessage成功返回的ID。
     * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
     */
    "MessageId"?: string;
    /**
     * 分页数，从1开始，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 手机号码。
     * @example `1234567890`
     */
    "PhoneNumber"?: string;
    /**
     * 短信批处理ID过滤，短信批处理ID为SendMessage成功返回的RequestId。
     * @example `62a72a20-8a9b-4060-a510-0c30a9340cba`
     */
    "RequestId"?: string;
    /**
     * 关联发送计划ID。
     * @example `08d19262-bd76-48fd-80e8-6a225ac388c1`
     */
    "ScheduleId"?: string;
    /**
     * 签名名称。
     * @example `PAI通知`
     */
    "Signature"?: string;
    /**
     * 签名ID，同时只能指定签名名称或签名ID其中之一。
     * @example `5480e3e7-f578-42d2-8ce8-217dec75f2e6`
     */
    "SignatureId"?: string;
    /**
     * 短信发送状态。
     * - 0 : 发送中。
     * - 1 : 发送成功。
     * - 2 : 发送失败。
     * @example `0`
     */
    "Status"?: number;
    /**
     * 模板号。
     * @example `SMS_123456`
     */
    "TemplateCode"?: string;
    /**
     * 模板ID，同时只能指定模板Code或模板ID其中之一。
     * @example `b1fe24e2-6a1b-42c6-901e-bfb2e898b5f3`
     */
    "TemplateId"?: string;
    /**
     * 模板类型过滤。
     * - 0 : 验证码。
     * - 1 : 短信通知。
     * - 2 : 推广短信。
     * @example `2`
     */
    "TemplateType"?: number;
}
