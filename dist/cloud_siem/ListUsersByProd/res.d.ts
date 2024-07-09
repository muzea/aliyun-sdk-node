export interface ListUsersByProdResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 待查询的产品code。
         * @example `sas`
         */
        SourceProdCode: string;
        /**
         * 待查询的日志code。
         * @example `cloud_siem_aegis_proc`
         */
        SourceLogCode: string;
        /**
         * 待查询的日志名字。
         * @example `安骑士进程日志`
         */
        SourceLogName: string;
        /**
         * 多云的code。取值：
         * - qcloud：腾讯云。
         * - aliyun：阿里云。
         * - hcloud：华为云。
         * @example `hcloud`
         */
        CloudCode: string;
        /**
         * 日志是否已经接入。
         * @example `true`
         */
        Imported: boolean;
        /**
         * 待查询的日志显示code，与控制台现实有关。
         * @example `${siem.xxx.xxxxxxxxx}`
         */
        LogMdsCode: string;
        /**
         * 购买威胁分析的阿里云账号ID。
         * @example `123XXXXXXXXX`
         */
        MainUserId: number;
        /**
         * 威胁分析阿里云账号ID。
         * @example `123XXXXXXXX`
         */
        SubUserId: number;
        /**
         * 威胁分析阿里云账号名字。
         * @example `sas_account_xxx`
         */
        SubUserName: string;
    }[];
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
