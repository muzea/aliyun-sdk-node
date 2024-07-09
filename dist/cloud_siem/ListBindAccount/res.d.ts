export interface ListBindAccountResponse {
    /**
     * 结果集。
     */
    Data: {
        /**
         * 账号名称。
         * @example `XXXX公司`
         */
        AccountName: string;
        /**
         * 账号的AccessId。
         * @example `ABCXXXXXXXX`
         */
        AccessId: string;
        /**
         * 该账号下绑定数据源的数量。
         * @example `2`
         */
        DataSourceCount: number;
        /**
         * 修改时间。
         * @example `2023-11-10 12:20:35`
         */
        ModifyTime: string;
        /**
         * 该账号绑定者。
         * @example `123xxxxxxx`
         */
        CreateUser: string;
        /**
         * 绑定ID。
         * @example `123xxxxxxx`
         */
        BindId: number;
        /**
         * 云账号ID。
         * @example `123xxxxxxx`
         */
        AccountId: string;
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
