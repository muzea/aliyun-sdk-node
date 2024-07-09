export interface ListProjectLogStoresResponse {
    /**
     * 返回结果。
     */
    Data: {
        /**
         * sls的project名字。
         * @example `cloud-siem-project`
         */
        Project: string;
        /**
         * sls的logstore名字。
         * @example `cloud-siem-logstore`
         */
        LogStore: string;
        /**
         * sls的project的endpoint。
         * @example `cn-hangzhou.log.aliyuncs.com`
         */
        EndPoint: string;
        /**
         * sls的project所在的region。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * sls的project所在的region名字。
         * @example `hangzhou`
         */
        LocalName: string;
        /**
         * 购买威胁分析的阿里云账号ID。
         * @example `123XXXXXXXXX`
         */
        MainUserId: number;
        /**
         * 待操作的威胁分析阿里云账号ID。
         * @example `123XXXXXXXX`
         */
        SubUserId: number;
        /**
         * 威胁分析阿里云账号名字。
         * @example `sas_account_xxxx`
         */
        SubUserName: string;
    }[];
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
