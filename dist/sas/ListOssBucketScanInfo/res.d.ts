export interface ListOssBucketScanInfoResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6C578F36-92D2-552C-8AA0-86EB1AC2****`
     */
    RequestId: string;
    /**
     * 分页查询时的页面信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `165`
         */
        TotalCount: number;
    };
    /**
     * 数据详情。
     */
    Data: {
        /**
         * Bucket名称。
         * @example `hz-new02****`
         */
        BucketName: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 最新扫描的时间戳，单位为毫秒。
         * @example `1698388233883`
         */
        LastScanTime: number;
        /**
         * 最新一次扫描的结束时间戳，单位为毫秒。
         * @example `1698388233883`
         */
        LastScanEndTime: number;
        /**
         * 是否已检测过。取值：
         * - **true**：已检测
         * - **false**：未检测
         * @example `false`
         */
        Scanned: boolean;
        /**
         * 检测过的文件数。
         * @example `100`
         */
        ScanObject: number;
        /**
         * Bucket内总文件数。
         * @example `100`
         */
        TotalObject: number;
        /**
         * 高风险文件数。
         * @example `0`
         */
        HighRisk: number;
        /**
         * 中风险文件数。
         * @example `0`
         */
        MediumRisk: number;
        /**
         * 低风险文件数。
         * @example `0`
         */
        LowRisk: number;
        /**
         * 检测状态。取值：
         * - **1**：未检测过。
         * - **2**：全量检测中。
         * - **3**：增量检测中。
         * - **4**：检测过。
         * @example `1`
         */
        Status: number;
        /**
         * 是否支持检测。取值：
         * - true：支持。
         * - false：不支持。
         * @example `true`
         */
        Support: boolean;
        /**
         * 不支持检测的原因。
         * @example `Unsupported Region。`
         */
        Message: string;
        /**
         * Bucket的存储类型。 取值：
         * - **Standard**：标准存储
         * - **IA**：低频访问
         * - **Archive**：归档存储
         * - **ColdArchive**：冷归档存储
         * @example `Archive`
         */
        StorageClass: string;
        /**
         * Bucket检测配置的开启状态，取值：
         * - **0**：表示未配置。
         * - **1**：表示已配置已开启。
         * - **2**：表示已配置未开启。
         * @example `0`
         */
        ConfigStatus: number;
        /**
         * Bucket解压缩配置的开启状态，取值：
         * - **0**：未配置解压。
         * - **1**：已配置解压。
         * @example `0`
         */
        DecompressStatus: number;
    }[];
}
