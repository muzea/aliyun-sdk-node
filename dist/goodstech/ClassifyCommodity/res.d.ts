export interface ClassifyCommodityResponse {
    /**
     * 请求ID。
     * @example `87C5AF93-F641-54C2-873D-0501E637489C`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 类目预测列表。
         */
        Categories: {
            /**
             * 分类ID的匹配度，大于0小于等于1。
             * @example `0.417248`
             */
            Score: number;
            /**
             * 类目ID。
             * > 您可以在 [category.txt](https://viapi-demo.oss-cn-shanghai.aliyuncs.com/doc/category.txt?spm=a2c4g.11186623.2.16.2c1d687bEDtrmY&file=category.txt) 文件中查看该接口支持的类目ID和类目名称。
             * @example `584`
             */
            CategoryId: string;
            /**
             * 类目名称。
             * > 您可以在 [category.txt](https://viapi-demo.oss-cn-shanghai.aliyuncs.com/doc/category.txt?spm=a2c4g.11186623.2.16.2c1d687bEDtrmY&file=category.txt) 文件中查看该接口支持的类目ID和类目名称。
             * @example `旁轴相机`
             */
            CategoryName: string;
        }[];
    };
}
