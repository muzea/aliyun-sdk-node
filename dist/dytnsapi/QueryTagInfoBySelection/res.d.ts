export interface QueryTagInfoBySelectionResponse {
    /**
     * 请求ID。
     * @example `1C3B8084-3A7D-570B-BC84-BF945A9CF65E`
     */
    RequestId: string;
    /**
     * 返回状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 返回的数据内容。
     */
    Data: {
        /**
         * 场景ID。
         * @example `41`
         */
        SceneId: number;
        /**
         * 行业ID。
         * @example `83`
         */
        IndustryId: number;
        /**
         * 场景名称。
         * @example `通用`
         */
        SceneName: string;
        /**
         * 标签名称。
         * @example `号码归属`
         */
        TagName: string;
        /**
         * 流程名称。
         * @example `查询`
         */
        FlowName: string;
        /**
         * 枚举值定义链接。
         * @example `example.aliyundoc.com
        `
         */
        EnumDefinitionAddress: string;
        /**
         * 标签ID。
         * @example `31`
         */
        TagId: number;
        /**
         * 可用的授权码列表。
         */
        AuthCodeList: string[];
        /**
         * 行业名称。
         * @example `物流`
         */
        IndustryName: string;
        /**
         * API文档链接。
         * @example `https://help.aliyun.com/document_detail/388997.html?spm=a2c4g.2573870.0.0.3aa921cbOrtqJz`
         */
        DocAddress: string;
        /**
         * API demo链接。
         * @example `https://help.aliyun.com/document_detail/388997.html?spm=a2c4g.2573870.0.0.3aa921cbOrtqJz`
         */
        DemoAddress: string;
        /**
         * 标签参数列表。
         */
        ParamList: {
            /**
             * 枚举值定义，code：desc
             */
            ValueDict: {
                /**
                 * 中文名。
                 * @example `阿里云`
                 */
                Desc: string;
                /**
                 * 英文名。
                 * @example `Aliyun`
                 */
                Code: string;
            }[];
            /**
             * 类型，EnumUIWidgetTypes对应的code。
             * @example `aqzx`
             */
            Type: string;
            /**
             * 输入提示。
             * @example `无`
             */
            Hint: string;
            /**
             * 参数英文名。
             * @example `preame`
             */
            Code: string;
            /**
             * 是否必填。
             * @example `false`
             */
            Must: boolean;
            /**
             * 参数中文名。
             * @example `无`
             */
            Name: string;
        }[];
        /**
         * 富文本描述信息，仅复杂标签有此字段。
         * @example `无`
         */
        RichTextDescription: string;
        /**
         * 标签类型。
         * @example `SINGLE_STAGE`
         */
        ComplexityType: string;
    }[];
    /**
     * 请求状态码。 **OK**为成功。
     * @example `OK`
     */
    Code: string;
    /**
     * 是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
