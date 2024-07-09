export interface ListMessageMetricsRequest {
    /**
     * 结束日期，格式20220102。
     * @example `20210321`
     */
    "EndDate": string;
    /**
     * 关联人群ID。
     * @example `10ed87f5-3ca8-4a43-9d83-b30519be7241`
     */
    "GroupId"?: string;
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
     * 关联触达计划ID。
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
     * @example `b1fe24e2-6a1b-42c6-901e-bfb2e898b5f3`
     */
    "SignatureId"?: string;
    /**
     * 开始日期，格式20220102。
     * @example `20210321`
     */
    "StartDate": string;
    /**
     * 模板号。
     * @example `SMS_123456`
     */
    "TemplateCode"?: string;
    /**
     * 模板ID，同时只能指定模板Code或模板ID其中之一。
     * @example `5480e3e7-f578-42d2-8ce8-217dec75f2e6`
     */
    "TemplateId"?: string;
    /**
     * 模板类型。
     * - 0 : 验证码。
     * - 1 : 短信通知。
     * - 2 : 推广短信。
     * @example `2`
     */
    "TemplateType"?: number;
}
