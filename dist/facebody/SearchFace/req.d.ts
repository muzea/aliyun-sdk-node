export interface SearchFaceRequest {
    /**
     * 数据库名称。
     * > **DbName**与**DbNames**二选一，如果同时配置了两个参数，**DbNames**优先级高于**DbName**。
     * @example `default`
     */
    "DbName"?: string;
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/SearchFace/SearchFace1.png`
     */
    "ImageUrl": string;
    /**
     * 单个人脸列表中搜索人脸结果数量限制，取值范围1~100。
     * @example `2`
     */
    "Limit": number;
    /**
     * 数据库名称列表，以英文逗号（,）分割，可以实现跨库查询，最大支持10个数据库。
     * > **DbName**与**DbNames**二选一，如果同时配置了两个参数，**DbNames**优先级高于**DbName**。
     * @example `test1,test2,test3`
     */
    "DbNames"?: string;
    /**
     * 质量分阈值。对人脸图片进行质量分析判断，得到的质量分小于该阈值则表示人脸图片质量不符合要求，比对失败。取值范围\[0.0,100.0]。0.0或空则表示不做质量分判断逻辑。
     * @example `50.0`
     */
    "QualityScoreThreshold"?: number;
    /**
     * 对输入图像中多少个人脸进行检索比对，控制人脸样本列表个数，取值范围1~10，默认为5。
     * @example `5`
     */
    "MaxFaceNum"?: number;
}
