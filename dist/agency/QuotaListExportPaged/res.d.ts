export interface QuotaListExportPagedResponse {
    /**
     * 请求id
     * @example `210e876f16704666020714468dab35`
     */
    RequestId: string;
    /**
     * 总条数
     * @example `10`
     */
    Total: number;
    /**
     * 当前页码
     * @example `1`
     */
    PageNo: number;
    /**
     * 当前每页条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果描述
     * @example `SUCCESS`
     */
    Msg: string;
    /**
     * 返回结果状态码，200是成功
     * @example `200`
     */
    Code: string;
    /**
     * 返回结果列表数据。
     */
    Data: {
        /**
         * 文件名称
         * @example `5113766248601929_quota_2023-06-22_2023-12-21_all_2023122121310057`
         */
        FileName: string;
        /**
         * 创建时间
         * @example `2023-12-21 21:31:57 UTC+8`
         */
        CreateTime: string;
        /**
         * 任务状态展示
         * @example `3`
         */
        Status: string;
        /**
         * 任务状态code枚举
         * 2：导出中
         * 3：导出成功
         * -1：导出失败
         * @example `Export Success`
         */
        StatusCode: string;
        /**
         * 文件下载链接
         * @example `//aliyun-eco-market-servic-singapore.oss-ap-southeast-1.aliyuncs.com/5113766248601929_quota_2023-06-22_2023-12-21_all_2023122121310057`
         */
        Url: string;
        /**
         * 提示信息
         * @example `success`
         */
        Message: string;
    }[];
}
