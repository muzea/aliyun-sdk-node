export interface CreateOrUpdateContactResponse {
    /**
     * 请求ID。
     * @example `E9C9DA3D-10FE-472E-9EEF-2D0A3E41****`
     */
    RequestId: string;
    /**
     * 返回AlertContact对象。
     */
    AlertContact: {
        /**
         * 告警联系人ID。
         * @example `123`
         */
        ContactId: number;
        /**
         * 告警联系人姓名。
         * @example `JohnDoe`
         */
        ContactName: string;
        /**
         * 告警联系人手机号码。
         * @example `1381111****`
         */
        Phone: string;
        /**
         * 告警联系人邮箱地址。
         * @example `someone@example.com`
         */
        Email: string;
        /**
         * 手机号码验证标识。
         * - `false`（默认）：未验证。
         * - `true`：已验证。
         * 您可以通过调用**SendTTSVerifyLink**接口验证联系人手机号，仅验证过的手机号可以在通知策略中使用电话的通知方式。
         * @example `false`
         */
        IsVerify: boolean;
        /**
         * 电话通知失败补发类型：0. 不补发   1. 重复拨打一次电话   2. 发送短信通知   3. 使用全局默认值（当前为不补发）
         * @example `3`
         */
        ReissueSendNotice: number;
        /**
         * 邮箱是否已验证。
         * @example `true`
         */
        isEmailVerify: boolean;
        /**
         * 钉钉告警机器人URL。
         * @example `https://test1.com`
         */
        DingRobotUrl: string;
    };
}
