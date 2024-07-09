export interface ListCalcEnginesRequest {
    /**
     * 数据源所属的DataWorks工作空间。
     * @example `466230
    `
     */
    "ProjectId": number;
    /**
     * 查询的数据源名称，精确匹配。
     * @example `test_mc`
     */
    "Name"?: string;
    /**
     * 查询的数据源类型。目前范围如下，不区分大小写。
     * - **ODPS**
     * - **EMR**
     * - **BLINK**
     * - **HOLO**
     * - **MaxGraph**
     * - **HYBRIDDB_FOR_POSTGRESQL**
     * - **ADB_MYSQL**
     * - **HADOOP_CDH**
     * - **CLICKHOUSE**
     * @example `ODPS`
     */
    "CalcEngineType": string;
    /**
     * 数据源所属的环境。
     * - **DEV**：开发环境
     * - **PRD**：生产环境。
     * @example `PRD`
     */
    "EnvType"?: string;
    /**
     * 分页查询时每页显示的数据量，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询的页码。大于等于1的正整数，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
}
