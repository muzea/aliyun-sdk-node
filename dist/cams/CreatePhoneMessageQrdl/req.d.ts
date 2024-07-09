export interface CreatePhoneMessageQrdlRequest {
    /**
     * 号码，输入国家/地区码+号码。
     * @example `86138009****`
     */
    "PhoneNumber": string;
    /**
     * 生产二维码图片格式。
     * @example `PNG`
     */
    "GenerateQrImage": string;
    /**
     * 消息内容。
     * @example `Hello`
     */
    "PrefilledMessage": string;
    /**
     * ISV子客户的SpaceId/实例ID。
     * @example `838833`
     */
    "CustSpaceId"?: string;
}
