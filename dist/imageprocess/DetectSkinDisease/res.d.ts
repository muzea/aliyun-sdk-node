export interface DetectSkinDiseaseResponse {
    /**
     * 请求ID。
     * @example `DE9ABC80-4DD4-4F1B-B95C-D0E438B8FE56`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 预测的结果。包含Key-Value对，Key为疾病名称，Value为概率。目前支持以下49类，具体分类如下表所示。
         * @example `"银屑病": 0.998,                     "皮肤型红斑狼疮": 0.0004,                     "皮炎湿疹": 0.0011`
         */
        Results: any;
        /**
         * 预测结果对应的英文。
         * @example `"psoriasis": 0.998,                     "eczema_dermatitis": 0.0011,                     "lupus_erythematosus": 0.0004`
         */
        ResultsEnglish: any;
        /**
         * 皮损部位识别。取值如下：
         * - scalp：头皮
         * - face：脸
         * - neck：颈部
         * - arm：手臂
         * - chest：胸部
         * - abdomen：腹部
         * - oxter：腋窝
         * - back：背部
         * - waist：腰部
         * - hand：手
         * - genitals：生殖器
         * - cruris：腿部内侧
         * - leg：腿
         * - foot：脚
         * - unknown：未知
         * @example `leg`
         */
        BodyPart: string;
        /**
         * 图像质量评分。
         * @example `90.9812`
         */
        ImageQuality: number;
        /**
         * 图像分类。取值如下：
         * - normal_skin：正常皮肤
         * - skin_lesion：皮损图片
         * - non_skin：非皮肤
         * @example `skin_lesion`
         */
        ImageType: string;
    };
}
