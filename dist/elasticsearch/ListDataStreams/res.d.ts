export interface ListDataStreamsResponse {
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC****`
     */
    RequestId: string;
    /**
     * 返回头信息。
     */
    Headers: {
        /**
         * 索引存储总大小，单位：Byte。
         * @example `143993923932990`
         */
        X-Managed-StorageSize: number;
        /**
         * 数据流总个数。
         * @example `100`
         */
        X-Managed-Count: number;
    };
    /**
     * 返回的数据流详情。
     */
    Result: {
        /**
         * 当前数据流下的全部索引，所占用的总存储空间。单位：Byte。
         * @example `1788239393298`
         */
        totalStorageSize: number;
        /**
         * 索引模版名称。
         * @example `template1`
         */
        indexTemplateName: string;
        /**
         * 生命周期策略名称。
         * @example `rollver1`
         */
        ilmPolicyName: string;
        /**
         * 索引名称。
         * @example `my-index-0001`
         */
        name: string;
        /**
         * 数据流状态，支持以下三种状态：
         * - Green：健康。
         * - Yellow：报警。
         * - Red：异常。
         * @example `Green`
         */
        health: string;
        /**
         * 当前数据流下的托管索引，所占用的总存储空间。单位：Byte。
         * @example `1788239393298`
         */
        managedStorageSize: number;
        /**
         * 当前数据流下的索引信息。
         */
        indices: {
            /**
             * 该字段已废弃，无需关注。
             * @example `false`
             */
            isManaged: boolean;
            /**
             * 查询数据流列表的时间。
             * @example `2018-07-13T03:58:07.253Z`
             */
            createTime: string;
            /**
             * 当前索引所占用的总存储空间。单位：Byte。
             * @example `15393899`
             */
            size: number;
            /**
             * 索引托管状态，支持以下三种状态：
             * - following：托管中。
             * - closing：取消托管中。
             * - closed：未托管。
             * @example `following`
             */
            managedStatus: string;
            /**
             * 数据流名称。
             * @example `Log1`
             */
            name: string;
            /**
             * 索引状态，支持以下三种状态：
             * - Green：健康。
             * - Yellow：报警。
             * - Red：异常。
             * @example `Green`
             */
            health: string;
        }[];
    }[];
}
