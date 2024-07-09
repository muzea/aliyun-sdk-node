export interface ListChatbotInstancesResponse {
    /**
     * 总计个数
     * @example `10`
     */
    TotalCount: number;
    /**
     * 实例信息列表
     */
    Bots: {
        /**
         *
         * @example `‘’`
         */
        Introduction: string;
        /**
         * 机器实例图标
         * @example `https://dss0.ali.com/70cFuHS.jpg`
         */
        Avatar: string;
        /**
         * 时区
         * @example `UTC+8`
         */
        TimeZone: string;
        /**
         * 创建时间
         * @example `1582266750353`
         */
        CreateTime: string;
        /**
         * 语言代码
         * @example `zh-cn`
         */
        LanguageCode: string;
        /**
         * 实例id
         * @example `af81a389-91f0-4157-8d82-720edd02b66a`
         */
        InstanceId: string;
        /**
         * 名称
         * @example `测试机器人`
         */
        Name: string;
    }[];
    /**
     * 个数
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求id
     * @example `da37319b-6c83-4268-9f19-814aed62e401`
     */
    RequestId: string;
    /**
     * 页号
     * @example `1`
     */
    PageNumber: number;
}
