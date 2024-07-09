export interface CreateDataCronClearOrderRequest {
    /**
     * 业务背景，以减少沟通成本。
     * @example `test`
     */
    "Comment": string;
    /**
     * 相关人列表。
     */
    "RelatedUserList"?: number[];
    /**
     * 工单参数。
     */
    "Param": {
        /**
         * 数据变更原因。
         * @example `test`
         */
        Classify: string;
        /**
         * 变更的数据库列表。
         */
        DbItemList: {
            /**
             * 数据库ID，可调用[SearchDatabases](~~141876~~)接口获取。
             * @example `10****`
             */
            DbId: number;
            /**
             * 是否为逻辑库，取值：
             * - **true**：是
             * - **false**：否
             * @example `false`
             */
            Logic: boolean;
        }[];
        /**
         * Crontab表达式，以便定期执行任务，更多信息，请参见[Crontab表达式](~~206581~~)。
         * @example `0 0 2 * * ?`
         */
        CronFormat: string;
        /**
         * 待清理的数据表列表。
         */
        CronClearItemList: {
            /**
             * 表名，您可以调用[ListTables](~~141878~~)接口获取该参数。
             * @example `t1`
             */
            TableName: string;
            /**
             * 字段名。字段为日期类型。
             * @example `gmt_create`
             */
            ColumnName: string;
            /**
             * 保留时长，即历史数据清理的规则，单位为天。例如您配置为7天，DMS将在执行时删除7天前的数据。
             * @example `7`
             */
            RemainDays: number;
            /**
             * 时间精度类型，当选择字段为日期数值型存储时使用，取值：
             * - **MILLISECONDS**：毫秒
             * - **SECONDS**：秒
             * @example `MILLISECONDS`
             */
            TimeUnit: string;
            /**
             * 过滤条件。
             * @example `where 1 = 1`
             */
            FilterSQL: string;
        }[];
        /**
         * 是否指定执行时长，取值：
         * - **true**：指定执行时长，到达指定时间后即停止执行。
         * - **false**：不指定执行时长，直到清理结束。
         * @example `true`
         */
        specifyDuration: boolean;
        /**
         * 执行时长，单位为小时。
         * > 当**specifyDuration**参数为**true**时，该参数必填。
         * @example `4`
         */
        DurationHour: number;
    };
    /**
     * 工单补充附件，对本次操作进行补充说明。
     * 您可以调用[GetUserUploadFileJob](~~206069~~)接口获取该参数。
     * @example `order_attachement.txt`
     */
    "AttachmentKey"?: string;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `123454324`
     */
    "Tid"?: number;
}
