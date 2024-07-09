export interface FaceLivenessRequest {
    /**
     * 产品code
     * @example `FACE_LIVENESS_MIN`
     */
    "ProductCode"?: string;
    /**
     * 商户侧自定义的业务唯一标识，用于后续定位排查问题使用。支持字母和数字的组合，长度最长32位，请确保唯一
     * @example `e0c34a77f5ac40a5aa5e6ed20c353888`
     */
    "MerchantBizId"?: string;
    /**
     * 商户用户ID，或可用于识别特定用户的其他标识符，例如手机号码、电子邮件地址等。强烈建议对userId字段的值进行预脱敏处理，例如对该值进行hash处理
     * @example `123456789`
     */
    "MerchantUserId"?: string;
    /**
     * 人脸照片地址
     * @example `https://digital-face-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg`
     */
    "FacePictureUrl"?: string;
    "FacePictureBase64"?: string;
    /**
     * 是否输出人脸质量分，默认不允许，T/F
     * - T：表示需要检测
     * - F：表示需要检测（默认F）
     * @example `T`
     */
    "FaceQuality"?: string;
    /**
     * 是否允许裁剪，默认不允许，T/F
     * - T：表示需要检测
     * - F：表示需要检测（默认F）
     * @example `T`
     */
    "Crop"?: string;
    /**
     * 是否进行遮挡检测，默认不允许T/F
     * - T：表示需要检测
     * - F：表示需要检测（默认F）
     * @example `T`
     */
    "Occlusion"?: string;
}
