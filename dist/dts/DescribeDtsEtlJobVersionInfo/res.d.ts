export interface DescribeDtsEtlJobVersionInfoResponse {
    /**
     * 请求ID。
     * @example `224DB9F7-3100-4899-AB9C-C938BCCB43E7`
     */
    RequestId: string;
    /**
     * 请求是否成功，如果失败则返回false。
     * @example `true`
     */
    Success: boolean;
    /**
     * 传入的ETL任务ID错误，找不到对应的任务。
     * @example `InvalidJobId`
     */
    ErrCode: string;
    /**
     * 当前实例状态列表的页码，默认为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 当前分页的记录数。
     * @example `20`
     */
    PageRecordCount: number;
    /**
     * 记录的总行数。
     * @example `200`
     */
    TotalRecordCount: number;
    /**
     * 传入的ETL任务ID错误，找不到对应的任务（任务可能已删除）。
     * @example `The specified dts job id %s is not exists.`
     */
    ErrMessage: string;
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 与本次请求相关的动态错误码。
     * @example `403`
     */
    DynamicCode: string;
    /**
     * 与本次请求相关的动态错误信息。
     * @example `present environment is not support,so skip`
     */
    DynamicMessage: string;
    /**
     * 返回ETL任务信息对象数组。
     */
    DtsEtlJobVersionInfos: {
        /**
         * 日志等级，有ERROR、WARN、INFO、DEBUG4种等级。
         * @example `INFO`
         */
        Status: string;
        /**
         * ETL任务名称。
         * @example `test_sql`
         */
        DtsJobName: string;
        /**
         * ETL任务ID。
         * @example `l5512es7w15****`
         */
        DtsJobId: string;
        /**
         * ETL任务版本号。
         * @example `9`
         */
        Version: number;
        /**
         * DTS实例ID。
         * @example `dtsg******gd`
         */
        DtsInstanceId: string;
        /**
         * 创建ETL任务的时间戳。
         * @example `1637229315000`
         */
        CreateTime: string;
        /**
         * 安全检查点，即ETL任务的当前位点。
         * @example `1637230117000`
         */
        SafeCheckpoint: string;
        /**
         * 创建者ID。
         * @example `10000000`
         */
        Creator: string;
        /**
         * 修改时间戳。
         * @example `1637230117000`
         */
        ModifyTime: string;
        /**
         * 创建者用户名。
         * @example `***@****.com`
         */
        CreatorName: string;
    }[];
}
