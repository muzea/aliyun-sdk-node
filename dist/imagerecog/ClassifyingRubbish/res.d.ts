export interface ClassifyingRubbishResponse {
    /**
     * 请求ID。
     * @example `1619647E-92ED-5641-A1D9-F05C33FD294A`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 图片中是否存在敏感信息。
         * - true：存在敏感信息，不会返回具体垃圾分类信息。
         * - false：不存在敏感信息。
         * @example `false`
         */
        Sensitive: boolean;
        /**
         * 输出垃圾识别结果。
         */
        Elements: {
            /**
             * 识别出的垃圾类别的置信度。
             * @example `0.9406`
             */
            CategoryScore: number;
            /**
             * 具体的物品名称。
             * @example `纸板箱`
             */
            Rubbish: string;
            /**
             * 物品名称的置信度。
             * @example `0.9406`
             */
            RubbishScore: number;
            /**
             * 垃圾类别。包括可回收垃圾、干垃圾、湿垃圾、有害垃圾。
             * @example `可回收垃圾`
             */
            Category: string;
        }[];
    };
}
