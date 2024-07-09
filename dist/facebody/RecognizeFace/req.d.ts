export interface RecognizeFaceRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * > - 推荐新版本调用方式为只输入图片，当只传入ImageURL的时候所有接口数据都会返回，新版本支持返回最多10张人脸的数据。
     * - 兼容老版本接口对布尔值入参和MaxFaceNumber的支持逻辑，当传入任意一个支持的布尔值入参或MaxFaceNumber以控制返回的数据时，只会返回设置了布尔值入参且为true的数据，这种调用方式不返回布尔值入参支持范围外的数据（Landmarks，LandmarkCount，PoseList，Pupils）。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/RecognizeFace/RecognizeFace1.png`
     */
    "ImageURL": string;
    /**
     * 兼容老版本接口，用来控制是否需要返回人脸年龄结果，取值true或false，默认false。
     * @example `false`
     */
    "Age"?: boolean;
    /**
     * 兼容老版本接口，用来控制是否需要返回人脸性别结果，取值true或false，默认false。
     * @example `false`
     */
    "Gender"?: boolean;
    /**
     * 兼容老版本接口，用来控制是否需要返回人脸帽子结果，取值true或false，默认false。
     * @example `false`
     */
    "Hat"?: boolean;
    /**
     * 兼容老版本接口，用来控制是否需要返回人脸眼镜结果，取值true或false，默认false。
     * @example `false`
     */
    "Glass"?: boolean;
    /**
     * 兼容老版本接口，用来控制是否需要返回人脸颜值结果，取值true或false，默认false。
     * @example `false`
     */
    "Beauty"?: boolean;
    /**
     * 兼容老版本接口，用来控制是否需要返回人脸表情结果，取值true或false，默认false。
     * @example `false`
     */
    "Expression"?: boolean;
    /**
     * 兼容老版本接口，用来控制是否需要返回人脸口罩结果，取值true或false，默认false。
     * @example `false`
     */
    "Mask"?: boolean;
    /**
     * 兼容老版本接口，用来控制是否需要返回人脸质量，取值true或false，默认false。
     * @example `false`
     */
    "Quality"?: boolean;
    /**
     * 兼容老版本接口，用来设置图片中人脸的最大返回数量，取值范围1~10，默认为1。若想返回多个人脸检测结果，请正确设置。默认按返回参数FaceProbabilityList进行降序排列。
     * @example `1`
     */
    "MaxFaceNumber"?: number;
}
