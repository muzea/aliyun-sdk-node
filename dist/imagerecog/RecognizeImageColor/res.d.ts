export interface RecognizeImageColorResponse {
    /**
     * 请求ID。
     * @example `CCC7C1D9-8C0F-58AD-ADE3-C331B83BD6F2`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 色板列表。
         */
        ColorTemplateList: {
            /**
             * RGB颜色值（16进制），例如：291A18。
             * @example `270315`
             */
            Color: string;
            /**
             * 当前颜色标签所占比例，取值范围`[0.0, 1.0]`。
             * @example `0.459527`
             */
            Percentage: number;
            /**
             * 颜色标签，共11种：black（黑色）、white（白色）、gray（灰色）、red（红色）、orange（橙色）、yellow（黄色）、green（绿色）、cyan（青色）、blue（蓝色）、purple（紫色）、magenta（紫红色）。
             * @example `red`
             */
            Label: string;
        }[];
    };
}
