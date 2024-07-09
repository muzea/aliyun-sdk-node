export interface UpdatePhoneMessageQrdlRequest {
    /**
     * 号码，输入国家/地区码+号码。
     * @example `628111908****`
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
     * 二维码编码。
     * @example `29338838`
     */
    "QrdlCode": string;
    /**
     * ISV子客户的SpaceId/实例ID。
     * @example `9383884`
     */
    "CustSpaceId"?: string;
}
