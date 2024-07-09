export interface DetectFaceRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/DetectFace/DetectFace1.png`
     */
    "ImageURL": string;
    /**
     * 是否需要返回人脸的特征点定位，取值true或false。
     * @example `true`
     */
    "Landmark"?: boolean;
    /**
     * 是否需要返回人脸质量，取值true或false。
     * @example `true`
     */
    "Quality"?: boolean;
    /**
     * 是否需要返回人脸的姿态，取值true或false。
     * @example `true`
     */
    "Pose"?: boolean;
    /**
     * 设置图片中人脸的最大返回数量，取值范围1~30。若想返回多个人脸检测结果，请正确设置。默认按返回参数FaceProbabilityList进行降序排列。
     * @example `1`
     */
    "MaxFaceNumber"?: number;
}
