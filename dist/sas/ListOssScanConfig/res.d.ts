export interface ListOssScanConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `E10BAF1C-A6C5-51E2-866C-76D5922E****`
     */
    RequestId: string;
    /**
     * 页面显示信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `50`
         */
        TotalCount: number;
    };
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 配置ID。
         * @example `443496`
         */
        Id: number;
        /**
         * 是否启用。取值：
         * - **1**：开启
         * - **0**：关闭
         * @example `1`
         */
        Enable: number;
        /**
         * 配置名称。
         * @example `test****`
         */
        Name: string;
        /**
         * 扫描时间，数字表示一周中的第几天。
         */
        ScanDayList: number[];
        /**
         * 检测开始时间，格式为HH:mm:ss。
         * @example `00:00:00
        `
         */
        StartTime: string;
        /**
         * 检测结束时间，格式为HH:mm:ss。
         * @example `06:00:00`
         */
        EndTime: string;
        /**
         * Bucket名称列表。
         */
        BucketNameList: string[];
        /**
         * 检测的文件后缀列表。
         */
        KeySuffixList: string[];
        /**
         * 检测的文件目录列表。
         */
        KeyPrefixList: string[];
        /**
         * 最后更新时间戳。
         * @example `1698388233883`
         */
        LastUpdateTime: number;
        /**
         * Bucket个数。
         * @example `10`
         */
        BucketCount: number;
        /**
         * 是否匹配所有前缀。
         * @example `true`
         */
        AllKeyPrefix: boolean;
        /**
         * 存在多个层级的压缩包嵌套时的最大解压层数，最小取值为1，最大取值为5。超过最大解压层数时，解压操作将直接结束，已解压出文件的检测不受影响。
         * @example `1`
         */
        DecompressMaxLayer: number;
        /**
         * 最大解压文件数。最小取值为1，最大取值为1000。超过最大解压文件数时，解压操作将直接结束，已解压出文件的检测不受影响。
         * @example `100`
         */
        DecompressMaxFileCount: number;
    }[];
}
