export interface ListExperimentMetasResponse {
    /**
     * 页码
     * @example `1`
     */
    Pages: number;
    /**
     * 请求ID
     * @example `0f7dd92f-4490-****-b8bd-****`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `无`
     */
    Message: string;
    /**
     * 分页大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 演练列表信息
     */
    Content: {
        /**
         * 故障演练当前状态
         * @example `READY`
         */
        State: string;
        /**
         * 演练创建时间
         * @example `1609430400000`
         */
        CreateTime: number;
        /**
         * 故障演练ID
         * @example `1234567890123456789`
         */
        ExperimentId: string;
        /**
         * 演练标签
         */
        Tags: string[];
        /**
         * 故障演练名称
         * @example `测试演练`
         */
        Name: string;
    }[];
    /**
     * 演练总数
     * @example `123`
     */
    Total: number;
    /**
     * 接口错误编码
     * @example `无`
     */
    Code: string;
    /**
     * 接口请求成功标识
     * @example `true`
     */
    Success: boolean;
}
