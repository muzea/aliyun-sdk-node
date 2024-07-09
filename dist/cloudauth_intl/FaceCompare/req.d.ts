export interface FaceCompareRequest {
    /**
     * 商户侧自定义的业务唯一标识，用于后续定位排查问题使用。支持字母和数字的组合，长度最长32位，请确保唯一。
     * @example `e0c34a77f5ac40a5aa5e6ed20c353888`
     */
    "MerchantBizId"?: string;
    "SourceFacePicture"?: string;
    /**
     * 人脸图片的HTTPS或HTTP地址。
     * @example `https://***face1.jpeg`
     */
    "SourceFacePictureUrl"?: string;
    "TargetFacePicture"?: string;
    /**
     * 底库人脸图片的HTTPS或HTTP地址。
     * @example `https://***face2.jpeg`
     */
    "TargetFacePictureUrl"?: string;
}
