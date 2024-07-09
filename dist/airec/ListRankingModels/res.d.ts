export interface ListRankingModelsResponse {
    /**
     * 返回结果
     */
    result: {
        /**
         * 模型ID
         * @example `123`
         */
        rankingModelId: string;
        /**
         * 最后修改时间
         * @example `2020-11-11T09:47:43.000Z`
         */
        gmtModified: string;
        /**
         * 创建时间
         * @example `2020-04-27T06:38:28.000Z`
         */
        gmtCreate: string;
        /**
         * meta
         */
        meta: any;
    }[];
    /**
     * 错误码
     * @example `200`
     */
    code: string;
    /**
     * 请求ID
     * @example `2D898E45-B97A-4245-B590-6D0AFEAF626B`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `success`
     */
    message: string;
}
