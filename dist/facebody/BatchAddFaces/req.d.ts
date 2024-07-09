export interface BatchAddFacesRequest {
    /**
     * 数据库名称。支持小写字母、数字、下划线的组合，长度1~64。
     * @example `default`
     */
    "DbName": string;
    /**
     * 实体ID，用来标识用户的唯一性，如用户ID、员工ID等。每个实体可包含多张人脸图片。支持大小写字母、数字、下划线、减号的组合，长度为2~64字符。
     * @example `U1`
     */
    "EntityId": string;
    /**
     * 类内相似度阈值。将新增人脸图片与**EntityId**内已有人脸进行相似比对，小于该阈值则表示与其他人脸图片差异较大，添加失败.；若**EntityId**内没有人脸存在，则添加成功。取值范围\[0.0,100.0]。0.0或空则表示不做类内相似度判断逻辑。参考值见[人脸比对1:1](~~151891~~)接口的返回结果字段**Thresholds**。
     * @example `50.0`
     */
    "SimilarityScoreThresholdInEntity"?: number;
    /**
     * 类间相似度阈值。将新增人脸图片与其他所有**EntityId**内已有人脸进行相似比对，大于等于该阈值则表示其他**EntityId**内存在相似人脸，出现重复，添加失败。取值范围\[0.0,100.0]。0.0或空则表示不做类间相似度判断逻辑。参考值见[人脸比对1:1](~~151891~~)接口的返回结果字段**Thresholds**。
     * @example `50.0`
     */
    "SimilarityScoreThresholdBetweenEntity"?: number;
    /**
     * 人脸信息。
     */
    "Faces": {
        /**
         * 自定义信息。支持字母、数字、标点符号和汉字。不超过512个字符。
         * @example `王小二`
         */
        ExtraData: string;
        /**
         * 人脸图像URL地址。人脸必须是正面无遮挡单人人脸。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
         * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/test/imgsearch/demo/1.png`
         */
        ImageURL: string;
    }[];
    /**
     * 质量分阈值。对新增人脸图片进行质量分析判断，得到的质量分小于该阈值则表示新增人脸图片质量不符合要求，添加失败。取值范围\[0.0,100.0]。0.0或空则表示不做质量分判断逻辑。
     * @example `50.0`
     */
    "QualityScoreThreshold"?: number;
}
