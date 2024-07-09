export interface SubmitHotlineTransferRegisterRequest {
    /**
     * 号码备案信息。
     */
    "TransferPhoneNumberInfos": {
        /**
         * 备案号码。
         * @example `1580000****`
         */
        PhoneNumber: string;
        /**
         * 机主真实姓名或公司名。
         * @example `A***`
         */
        PhoneNumberOwnerName: string;
        /**
         * 机主身份证号。
         * @example `500***`
         */
        IdentityCard: string;
    }[];
    /**
     * 资质ID。您可以通过[GetHotlineQualificationByOrder](~~393548~~)接口获取。
     * @example `10000004933****`
     */
    "QualificationId": string;
    /**
     * 经办人姓名。
     * @example `A***`
     */
    "OperatorName": string;
    /**
     * 经办人邮箱。
     * @example `username@example.com`
     */
    "OperatorMail": string;
    /**
     * 经办人邮箱验证码。
     * @example `1234`
     */
    "OperatorMailVerifyCode"?: string;
    /**
     * 经办人手机号。
     * @example `158****7230`
     */
    "OperatorMobile": string;
    /**
     * 经办人手机验证码。
     * @example `1234`
     */
    "OperatorMobileVerifyCode": string;
    /**
     * 经办人身份证号码。
     * @example `5****************9`
     */
    "OperatorIdentityCard": string;
    /**
     * 确认承诺书真实性。取值：
     * - **true**：真实。
     * - **false**：不真实。
     * @example `true`
     */
    "Agreement": string;
    /**
     * 400号码。
     * @example `400****`
     */
    "HotlineNumber": string;
}
