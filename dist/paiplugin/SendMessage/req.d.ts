export interface SendMessageRequest {
    /**
     * 请求参数的主体信息。
     */
    "body"?: {
        /**
         * 人群ID，用于关联人群。
         * @example `10ed87f5-3ca8-4a43-9d83-b30519be7241`
         */
        GroupId: string;
        /**
         * 外部拓展字段，示例：["1234567890"]。
         */
        OutIds: string[];
        /**
         * 手机号，每个手机号对应一个模板变量、上行拓展码和外部拓展字段，号码个数最大为1000，示例：["1234567890"]。
         */
        PhoneNumbers: string[];
        /**
         * 发送计划ID，用于关联发送计划。
         * @example `08d19262-bd76-48fd-80e8-6a225ac388c1`
         */
        ScheduleId: string;
        /**
         * 签名名称。
         * @example `PAI通知`
         */
        SignName: string;
        /**
         * 签名ID，同时只能指定签名名称或签名ID其中之一。
         * @example `5480e3e7-f578-42d2-8ce8-217dec75f2e6`
         */
        SignatureId: string;
        /**
         * 短信上行拓展码，示例：["1234567890"]。
         */
        SmsUpExtendCodes: string[];
        /**
         * 模板Code。
         * @example `SMS_123456`
         */
        TemplateCode: string;
        /**
         * 模板ID，同时只能指定模板Code或模板ID其中之一。
         * @example `b1fe24e2-6a1b-42c6-901e-bfb2e898b5f3`
         */
        TemplateId: string;
        /**
         * 短信模板变量对应的实际值，JSON格式。支持传入多个参数，示例：[{"name":"张三","number":"15038****76"}]。
         */
        TemplateParams: string[];
        /**
         * 计费类型（为空时默认后付费）。
         * - PayAsYouGo：后付费
         * - Subscription：预付费
         * @example `PayAsYouGo`
         */
        PaymentType: string;
    };
}
