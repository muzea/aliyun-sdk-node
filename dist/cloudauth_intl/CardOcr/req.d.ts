export interface CardOcrRequest {
    /**
     * 商户侧自定义的业务唯一标识，用于后续定位排查问题使用。支持字母和数字的组合，长度最长32位，请确保唯一
     * @example `dso9322***dsjsd22`
     */
    "MerchantBizId"?: string;
    /**
     * 商户用户ID，或可用于识别特定用户的其他标识符，例如手机号码、电子邮件地址等。强烈建议对userId字段的值进行预脱敏处理，例如对该值进行hash处理
     * @example `123456789`
     */
    "MerchantUserId"?: string;
    "IdOcrPictureBase64"?: string;
    /**
     * 证件正面图片URL
     * @example `https://digital-cardocr-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
    `
     */
    "IdOcrPictureUrl"?: string;
    /**
     * 证件类型。
     * @example `00000006`
     */
    "DocType"?: string;
    /**
     * 产品code
     * @example `ID_OCR_MIN`
     */
    "ProductCode"?: string;
    /**
     * 是否进行证件OCR
     * - T：表示需要证件OCR（默认T）
     * - F：表示不需要
     * @example `T`
     */
    "Ocr"?: string;
    /**
     * 是否进行证脸质量检测
     * - T：表示需要检测
     * - F：表示需要检测（默认F）
     * @example `F`
     */
    "IdFaceQuality"?: string;
    /**
     * 是否开启防伪检测
     * - T：表示开启防伪
     * - F：表示关闭（默认F）
     * @example `F`
     */
    "Spoof"?: string;
}
