export interface ListDesignResponse {
    /**
     * 请求id
     * @example `00F97175-FEAA-5E42-B048-952D32E9B881`
     */
    RequestId: string;
    /**
     * 是否调用成功。true：调用成功。                                 false：调用失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * API的版本。
     * @example `2018-12-12`
     */
    Version: string;
    /**
     * 统计结束时间
     * @example `True`
     */
    End: number;
    /**
     * 返回结果分页。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 版本
     * @example `47c2f5ff-6c7c-4ef0-b48c-b12e1e996ed6`
     */
    DesignVersion: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 预测类目的id
         * @example `c87ddbe58afd40ed864d3cab7c8c01b2`
         */
        GoodsId: string;
        /**
         * 模板列表
         */
        Templates: {
            /**
             * 正式预览链接
             * @example `https://preview-lyj.aliyuncs.com/preview/36dec4b3530848dc90e128870790fdc4?subSceneIds=219024`
             */
            PreviewUrl: string;
            /**
             * 模板ID
             * @example `1320814`
             */
            TemplateId: string;
        }[];
    }[];
}
