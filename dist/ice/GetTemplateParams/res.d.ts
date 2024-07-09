export interface GetTemplateParamsResponse {
    /**
     * Id of the request
     * @example `****2876-6263-4B75-8F2C-CD0F7FCF****`
     */
    RequestId: string;
    /**
     * 模板Id
     * @example `******419c8741c1b4325f035b******`
     */
    TemplateId: string;
    /**
     * 参数列表
     */
    ParamList: {
        /**
         * 参数名称
         * @example `video1`
         */
        Key: string;
        /**
         * 素材类型
         * @example `Image`
         */
        Type: string;
        /**
         * 原始素材封面
         * @example `https://ice-materials-***.alicdn.com/***​/********20221****.jpg`
         */
        CoverUrl: string;
        /**
         * 原始素材地址
         * @example `https://ice-materials-***.alicdn.com/***​/********2022111618012453120c2a81*******.mp4`
         */
        MediaUrl: string;
        /**
         * 原始字幕内容
         * @example `字幕测试`
         */
        Content: string;
    }[];
}
