export interface MergeVideoModelFaceRequest {
    /**
     * 视频人脸模板的模板ID。
     * @example `3bf2418c-7adf-4002-a9d6-2f7cf1889c0d`
     */
    "TemplateId": string;
    /**
     * 替换后的人脸参考图像URL地址（TemplateId为单人脸时不可为空）。**FaceImageURL**仅为单人视频场景时使用，此时无需输入**MergeInfos**字段。
     * 当前仅支持上海地域的OSS链接，如何生成URL请参见[文件URL处理](~~155645~~)。
     * 输入限制：
     * - 图像格式：JPEG、JPG、PNG。
     * - 图像分辨率：大于等于128×128像素，小于等于4000×4000像素。
     * - 图像大小：不大于20 MB。
     * - URL地址不能包含中文字符。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/MergeVideoFace/MergeVideoFace-xxxx.png`
     */
    "FaceImageURL"?: string;
    /**
     * 是否添加水印。取值范围如下：
     * - True（默认）：添加水印。
     * - False：不添加水印。
     * @example `True`
     */
    "AddWatermark"?: boolean;
    /**
     * 是否开启人脸美颜增强。取值范围如下：
     * - False（默认）：不开启人脸美颜增强。
     * - True：开启人脸美颜增强。
     * @example `True`
     */
    "Enhance"?: boolean;
    /**
     * 水印类型。取值范围如下：
     * - EN（默认）：英文水印。
     * - CN：中文水印。
     * @example `EN`
     */
    "WatermarkType"?: string;
    /**
     * 融合参数，模板视频的人脸信息及待融合的用户人脸图片（TemplateId为多人脸时不可为空）。
     * > - **MergeInfos**仅为多人视频场景时使用，需确保用户添加模板时**VideoScene**参数传入了`multi`值，其中传入的**TemplateFaceID**需要与添加模版时返回的**FaceInfos**里的**TemplateFaceID**一一对应。
     * - 同时传入**FaceImageURL**和**MergeInfos**，以**TemplateId**为单/多人脸为准，过滤另一个入参。
     */
    "MergeInfos"?: {
        /**
         * 多脸模板对应的某个人脸的子ID。需要先在[视频人脸融合模板增加](~~468904~~)接口中获取（传入多个TemplateFaceID时，不可重复）。
         * > 同时传入**TemplateFaceID**和**TemplateFaceURL**时，**TemplateFaceID**优先。
         * @example `f913c614-d542-42ba-b173-07db2058c207_0`
         */
        TemplateFaceID: string;
        /**
         * 多脸模板对应的某个人脸的图像URL。此情况允许用户自己使用第三方检测模块抽帧进行人脸识别后获取相应的人脸图像。
         * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-/videoenhan/MergeVideoModelFace/xxx.jpg`
         */
        TemplateFaceURL: string;
        /**
         * 该人脸待替换的图像URL。当前仅支持上海地域的OSS链接，如何生成URL请参见[文件URL处理](~~155645~~)。
         * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/MergeVideoModelFace/xxx.jpg`
         */
        ImageURL: string;
    }[];
}
