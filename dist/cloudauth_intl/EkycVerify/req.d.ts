export interface EkycVerifyRequest {
    /**
     * 产品code
     * @example `eKYC_MIN`
     */
    "ProductCode"?: string;
    /**
     * 商户侧自定义的业务唯一标识，用于后续定位排查问题使用。支持长度为32位的字母和数字的组合，请确保唯一。
     * @example `e0c34a77f5ac40a5aa5e6ed20c353888`
     */
    "MerchantBizId"?: string;
    /**
     * 您自定义的用户ID，或者其他可以识别特定用户的标识，例如：手机号码、邮箱地址等。强烈建议对该字段的值进行预先脱敏，例如对值进行哈希处理。
     * @example `123456`
     */
    "MerchantUserId"?: string;
    /**
     * 证件类型
     * @example `00000001`
     */
    "DocType"?: string;
    /**
     * 用户的真实姓名。当Authorize='T'且证件类型为大陆身份证时，证件关键信息（DocName、DocNo）与证件图片（IdOcrPictureBase64/URL)必须至少输入其中一组
     * 注：支持长度为1个汉字以上的汉字组合，无特殊字符，少数民族的点【·】除外
     * @example `张**`
     */
    "DocName"?: string;
    /**
     * 用户的证件号。当Authorize='T'且证件类型为大陆身份证时，证件关键信息（DocName、DocNo）与证件图片（IdOcrPictureBase64/URL)必须至少输入其中一组
     * 注：支持长度为18位的字母和数字组合
     * @example `410***************`
     */
    "DocNo"?: string;
    /**
     * 证件正面图片URL
     * @example `https://digital-cardocr-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
    `
     */
    "IdOcrPictureUrl"?: string;
    "IdOcrPictureBase64"?: string;
    /**
     * 人脸照片地址
     * @example `https://digital-face-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg`
     */
    "FacePictureUrl"?: string;
    "FacePictureBase64"?: string;
    /**
     * 是否允许裁剪，默认不允许，T/F
     * - T：表示需要检测
     * - F：表示需要检测（默认F）
     * @example `F`
     */
    "Crop"?: string;
    /**
     * 是否开启身份权威核验，目前仅适用于中国大陆二代身份证
     * @example `T`
     */
    "Authorize"?: string;
    "IdThreshold"?: string;
}
