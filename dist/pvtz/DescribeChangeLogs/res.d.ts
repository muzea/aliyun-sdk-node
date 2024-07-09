export interface DescribeChangeLogsResponse {
    /**
     * 当前页面大小。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `F0FCB52A-D512-41A0-8595-40234EDCFD8B`
     */
    RequestId: string;
    ChangeLogs: {
        /**
         * 变更日志。
         */
        ChangeLog: {
            /**
             * 操作时间戳。
             * @example `1516779348000`
             */
            OperTimestamp: number;
            /**
             * 操作对象ID。
             * @example `CAgICA1OA_58`
             */
            EntityId: string;
            /**
             * 操作对象类型。
             * @example `PV_ZONE`
             */
            OperObject: string;
            /**
             * 操作时间。
             * @example `2018-01-24T07:35Z`
             */
            OperTime: string;
            /**
             * 操作Ip。
             * @example `1.1.XX.XX`
             */
            OperIp: string;
            /**
             * 操作动作。
             * @example `add`
             */
            OperAction: string;
            /**
             * 操作详情。
             * @example `add test-api.com`
             */
            Content: string;
            /**
             * 操作对象名称。
             * @example `test-api.com`
             */
            EntityName: string;
            /**
             * 记录ID。
             * @example `6726`
             */
            Id: number;
            /**
             * 操作者ID。
             * @example `13270376`
             */
            CreatorId: string;
            /**
             * 操作者类型。取值为空或**USER**
             * @example `USER`
             */
            CreatorType: string;
            /**
             * 操作者子类型。
             * - CUSTOMER：主账号
             * - SUB：子账号
             * - STS：角色扮演
             * - OTHER：其他
             * @example `SUB`
             */
            CreatorSubType: string;
        }[];
    };
    /**
     * 当前页码。
     * @example `2`
     */
    PageNumber: number;
    /**
     * 总页数。
     * @example `100`
     */
    TotalPages: number;
    /**
     * 日志列表总数。
     * @example `100`
     */
    TotalItems: number;
}
