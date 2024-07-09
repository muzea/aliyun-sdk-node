export interface DescribeAccountsResponse {
    /**
     * 请求ID。
     * @example `B562A65B-39AB-4EE8-8635-5A222054FB35`
     */
    RequestId: string;
    Accounts: {
        /**
         * 账号信息列表。
         */
        Account: {
            /**
             * 账号的角色类型，取值说明：
             * - **db**: shard角色。
             * - **cs**：config server角色。
             * - **mongos**：mongos角色。
             * - **logic**：分片集群实例。
             * - **normal**：副本集实例。
             * @example `mongos`
             */
            CharacterType: string;
            /**
             * 账号的状态，取值说明：
             * - **Unavailable**：不可用。
             * - **Available**：可用。
             * @example `Available`
             */
            AccountStatus: string;
            /**
             * 账号备注信息。
             * > 调用[ModifyAccountDescription](~~468391~~)接口设置账号备注信息后才会返回该参数。
             * @example `管理员`
             */
            AccountDescription: string;
            /**
             * 账号所属的实例ID。
             * @example `dds-bp1fd530f271****`
             */
            DBInstanceId: string;
            /**
             * 账号名。
             * @example `root`
             */
            AccountName: string;
        }[];
    };
}
