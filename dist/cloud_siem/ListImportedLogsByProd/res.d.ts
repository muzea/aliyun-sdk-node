export interface ListImportedLogsByProdResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 日志对应的产品code。
         * @example `qcloud_waf`
         */
        ProdCode: string;
        /**
         * 日志code。
         * @example `cloud_siem_waf_xxxxx`
         */
        LogCode: string;
        /**
         * 日志显示code。
         * @example `${siem.prod. cloud_siem_waf_xxxxx}`
         */
        LogMdsCode: string;
        /**
         * 已接入该日志的用户数量。
         * @example `2`
         */
        ImportedUserCount: number;
        /**
         * 未接入该日志的用户数量。
         * @example `3`
         */
        UnImportedUserCount: number;
        /**
         * 该日志下总共的用户数量。
         * @example `5`
         */
        TotalUserCount: number;
        /**
         * 日志最后接入时间。
         * @example `2023-11-23 12:30:00`
         */
        ModifyTime: string;
        /**
         * 日志是否已经接入。取值：
         *  - 1：已接入。
         *  - 0：未接入。
         * @example `2023-11-23 12:30:00`
         */
        Imported: number;
        /**
         * 新增账号是否自动接入。取值：
         *  - 1：自动接入。
         *  - 0：不自动接入。
         * @example `2023-11-23 12:30:00`
         */
        AutoImported: number;
        /**
         * 日志类型。取值：
         *  - 1：中心侧接入。
         *  - 2：预定义日志服务。
         *  -3：自定义日志服务
         * @example `2023-11-23 12:30:00`
         */
        LogType: number;
        /**
         * 多云的code。取值：
         * - qcloud：腾讯云。
         * - aliyun：阿里云。
         * - hcloud：华为云。
         * @example `hcloud`
         */
        CloudCode: string;
    }[];
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
