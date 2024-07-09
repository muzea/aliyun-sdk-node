export interface QueryTagListPageResponse {
    /**
     * 请求ID。
     * @example `A4475657-BB7E-585D-9E09-37934F096103`
     */
    RequestId: string;
    /**
     * 返回状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 总数。
         * @example `32`
         */
        TotalCount: number;
        /**
         * 总页数。
         * @example `91`
         */
        TotalPage: number;
        /**
         * 分页大小。
         * @example `24`
         */
        PageSize: number;
        /**
         * 当前页码。
         * @example `11`
         */
        PageNo: number;
        /**
         * 数据列表。
         */
        Records: {
            /**
             * 场景ID。
             * @example `13`
             */
            SceneId: number;
            /**
             * 场景名称。
             * @example `查询`
             */
            SceneName: string;
            /**
             * 行业ID。
             * @example `2`
             */
            IndustryId: number;
            /**
             * 标签介绍。
             * @example `这个标签是查询号码状态的。`
             */
            Introduction: string;
            /**
             * - 0：隐藏
             *
             * - 1：公开
             * @example `1`
             */
            SaleStatusStr: string;
            /**
             * 前端调用的API名称。
             * @example `TwoElementsVerification`
             */
            ApiName: string;
            /**
             * 标签ID。
             * @example `75`
             */
            Id: number;
            /**
             * 行业名称。
             * @example `测试`
             */
            IndustryName: string;
            /**
             * 请求状态码。 OK为成功。
             * @example `OK`
             */
            Code: string;
            /**
             * API文档链接。
             * @example `https://help.aliyun.com/document_detail/388997.html?spm=a2c4g.388997.0.0.cf804cc7DX4vlP`
             */
            DocAddress: string;
            /**
             * 标签名称。
             * @example `阿里云`
             */
            Name: string;
            /**
             * 是否已经申请开通。
             * @example `是`
             */
            IsOpen: number;
        }[];
    };
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
