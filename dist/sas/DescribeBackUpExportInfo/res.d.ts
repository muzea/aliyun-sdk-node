export interface DescribeBackUpExportInfoResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BE120DAB-F4E7-4C53-ADC3-A97578ABF384`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页大小。
         * @example `20`
         */
        PageSize: number;
        /**
         * 返回数据的总条数。
         * @example `29`
         */
        TotalCount: number;
        /**
         * 当前页显示的数据条数。
         * @example `9`
         */
        Count: number;
    };
    /**
     * 数据。
     */
    Data: {
        /**
         * 归档数据的下载url地址。
         * @example `http://xxx.oss-cn-xxx.aliyuncs.com/export/assetInstance_20221221_1671606250570.zip`
         */
        Link: string;
        /**
         * 归档数据导出任务的状态。取值：
         * - **init**：导出初始化
         * - **exporting**：导出进行中
         * - **success**：导出成功
         * @example `success`
         */
        Status: string;
        /**
         * 归档导出任务的进度百分比（%）。
         * @example `100`
         */
        Progress: number;
        /**
         * 当前已导出数据的条数。
         * @example `29`
         */
        CurrentCount: number;
        /**
         * 归档导出任务的创建时间。
         * @example `1671607025000`
         */
        GmtCreate: number;
        /**
         * 归档导出任务失败时的错误信息。
         * @example `success`
         */
        Message: string;
        /**
         * 归档导出文件的名称。
         * @example `suspicious_event_20221203`
         */
        FileName: string;
        /**
         * 归档数据总量。
         * @example `29`
         */
        TotalCount: number;
        /**
         * 归档导出任务的id。
         * @example `273698***`
         */
        Id: number;
    }[];
}
