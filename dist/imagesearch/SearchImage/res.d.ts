export interface SearchImageResponse {
    /**
     * 错误信息。
     * @example `success`
     */
    Msg: string;
    /**
     * 搜索结果概述信息。
     */
    Head: {
        /**
         * 返回结果数目。
         * @example `10`
         */
        DocsFound: number;
        /**
         * 实例中命中结果数目。
         * @example `10000`
         */
        DocsReturn: number;
        /**
         * 搜索耗时，单位毫秒。
         * @example `95`
         */
        SearchTime: number;
    };
    /**
     * 请求ID。
     * @example `3033A0A7-36DA-5AC9-9973-953C38EBDFA9`
     */
    RequestId: string;
    /**
     * 所有返回的商品描述信息。
     */
    Auctions: {
        /**
         * 图片名称。
         * @example `2092061_1.jpg`
         */
        PicName: string;
        /**
         * 整数类型属性。
         * @example `2`
         */
        IntAttr: number;
        /**
         * 图片类目。
         * @example `8888888`
         */
        CategoryId: number;
        /**
         * 商品ID。
         * @example `2092061_1`
         */
        ProductId: string;
        /**
         * 字符串类型属性。
         * @example `ss`
         */
        StrAttr: string;
        /**
         * 系统打分信息。
         * > - 当前字段已弃用，建议使用Score。
         * - SortExprValues是一个分号分隔的二元组，第一个值表示图片的相关性分数，值越大表示和查询的图片相关性越高。由于算法模型不同。
         * - 当类目为0~2时，SortExprValues值域范围：0～7.33136443711219e+24。
         * - 类目为其他值时，SortExprValues值域范围：0～5.37633353624177e+24。当两个图片完全一样时，这个分值最大。
         * @example `5.37633353624177e+24;0`
         */
        SortExprValues: string;
        /**
         * 用户自定义的内容。
         * @example `zidingyi`
         */
        CustomContent: string;
        Score: number;
    }[];
    /**
     *     错误码。
     * - 0：成功。
     * - 非0：失败。
     * @example `0`
     */
    Code: number;
    /**
     * 类目预测、主体识别结果等信息。
     */
    PicInfo: {
        /**
         *     主体识别结果。
         * 图片的主体区域，格式为x1,x2,y1,y2，其中 x1,y1 是左上角的点，x2，y2是右下角的点。若用户请求中指定了主体区域，则以请求中为准。
         * @example `94,691,206,650`
         */
        Region: string;
        /**
         *     类目预测结果。
         * 若用户请求中指定了类目，则以请求中为准。
         * @example `88888888`
         */
        CategoryId: number;
        MultiRegion: {
            Region: string;
        }[];
        /**
         * 系统支持的所有类目信息。
         */
        AllCategories: {
            /**
             * 类目名称。
             * @example `other`
             */
            Name: string;
            /**
             * 类目ID。
             * @example `88888888`
             */
            Id: number;
        }[];
    };
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
