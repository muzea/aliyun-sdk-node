export interface ListUserProdLogsResponse {
    /**
     * 日志列表
     */
    Data: {
        /**
         * 日志code。
         * @example `cloud_siem_aegis_proc`
         */
        SourceLogCode: string;
        /**
         * 需要接入日志的详细SLS信息，json数组格式。
         * @example `{"project":"wafnew-project-1335759343513432-cn-hangzhou","logStore":"wafnew-logstore","regionCode":"cn-hangzhou","prodCode":"waf"}`
         */
        SourceLogInfo: string;
        /**
         * 需要接入日志的详细SLS信息。
         * @example `cn-shanghai.siem-project.siem-logstore`
         */
        DisplayLine: string;
        /**
         * 产品code。
         * @example `sas`
         */
        SourceProdCode: string;
        /**
         * 是否已经接入。取值：
         *  - 0：已接入。
         *  - 1 ：未接入。
         * @example `0`
         */
        IsDeleted: number;
        /**
         * 是否已经接入。取值：
         *  - true ：已接入。
         *  - false：未接入。
         * @example `true`
         */
        Imported: boolean;
        /**
         * 返回接入详细信息。取值：
         *  - true：已返回。
         *  - false：未返回。
         * @example `true`
         */
        Displayed: boolean;
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
