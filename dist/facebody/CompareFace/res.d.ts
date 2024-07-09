export interface CompareFaceResponse {
    /**
     * 请求ID。
     * @example `B352CD68-C847-5C48-BE68-3F266356FDD7`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 1
         */
        Thresholds: number[];
        /**
         * 1
         */
        RectBList: number[];
        /**
         * 两张图片中的最大人脸属于同一个人的置信度，取值范围0~100。供参考的三个阈值是61，69和75，分别对应千分之一，万分之一和十万分之一误识率。阈值设置越高，误识率越低，通过率也越低，对安全性要求越高的场合，可以设置更高的阈值。如果某张图片中没有人脸，则报错误信息。
         * @example `88.4831771850586`
         */
        Confidence: number;
        /**
         * 1
         */
        RectAList: number[];
        /**
         * 输入图像A的质量分。
         * @example `99.65772247314453`
         */
        QualityScoreA: number;
        /**
         * 输入图像B的质量分。
         * @example `98.01177978515625`
         */
        QualityScoreB: number;
        /**
         * 提示信息，纯文字描述，以下提示信息单独出现或是几条提示信息的组合。
         * 质量相关提示（某张人脸质量分小于请求参数质量分阈值时会出现）：
         * - `imageA quality score less threshold`：图像A的质量分小于输入参数设置的阈值。
         * - `imageB quality score less threshold`：图像B的质量分小于输入参数设置的阈值。
         * 人脸尺寸相关提示（检测到人脸且人脸宽或高小于50像素时会有该提示信息。出现该提示信息时，请尽可能输入像素数大于64x64的人脸，并请酌情参考返回的对比置信度Confidence值）：
         * - `face in imageA is too small`：图像A中的人脸太小。
         * - `face in imageB is too small`：图像B中的人脸太小。
         * @example `imageB quality score less threshold`
         */
        MessageTips: string;
        /**
         * 图片A中的人脸是否戴口罩。
         * - 0：不戴口罩。
         * - 1：戴口罩。
         * @example `0`
         */
        IsMaskA: number;
        /**
         * 图片B中的人脸是否戴口罩。
         * - 0：不戴口罩。
         * - 1：戴口罩。
         * @example `0`
         */
        IsMaskB: number;
        LandmarksAList: number[];
        LandmarksBList: number[];
    };
}
