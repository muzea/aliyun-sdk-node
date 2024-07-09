export interface DescribeGroupedMaliciousFilesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `8045E03E-6D91-4C53-9F22-5A1B84BB29D9`
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
         * 分页查询时，每页显示的数据的最大条数。默认值为**20**。
         * @example `20`
         */
        PageSize: number;
        /**
         * 恶意样本文件的总数。
         * @example `2`
         */
        TotalCount: number;
        /**
         * 当前页返回的恶意样本文件的数量。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 恶意样本文件列表。
     */
    GroupedMaliciousFileResponse: {
        /**
         * 镜像恶意样本的处理状态。取值：
         * - **0**：未处理
         * - **1**：已处理
         * - **2**：验证中
         * - **3**：已加白
         * @example `0`
         */
        Status: number;
        /**
         * 被恶意样本影响的镜像数量。
         * @example `3`
         */
        ImageCount: number;
        /**
         * 最新扫描时间戳，单位：毫秒。
         * @example `1596533942000`
         */
        LatestScanTimestamp: number;
        /**
         * 恶意文件的名称。
         * @example `testFile`
         */
        MaliciousName: string;
        /**
         * 恶意文件的MD5值。
         * @example `d836968041f7683b5459****`
         */
        MaliciousMd5: string;
        /**
         * 首次扫描时间戳，单位：毫秒。
         * @example `1594907349000`
         */
        FirstScanTimestamp: number;
        /**
         * 镜像恶意样本的危险程度。取值：
         * - **serious**：紧急
         * - **suspicious**：可疑
         * - **remind**：提醒
         * @example `serious`
         */
        Level: string;
        /**
         * 恶意文件的关键字。
         * @example `WEBSHELL_IMG`
         */
        MaliciousKey: string;
    }[];
}
