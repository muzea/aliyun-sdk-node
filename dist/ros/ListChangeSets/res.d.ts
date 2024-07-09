export interface ListChangeSetsResponse {
    /**
     * 查询到的总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6F`
     */
    RequestId: string;
    /**
     * 分页查询的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 更改集列表。
     */
    ChangeSets: {
        /**
         * 更改集状态。
         * @example `CREATE_COMPLETE`
         */
        Status: string;
        /**
         * 更改集所属资源栈ID。
         * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
         */
        StackId: string;
        /**
         * 更改集名称。
         * @example `MyChangeSet`
         */
        ChangeSetName: string;
        /**
         * 更改集描述。
         * @example `It is a demo.`
         */
        Description: string;
        /**
         * 更改集类型。
         * @example `UPDATE`
         */
        ChangeSetType: string;
        /**
         * 更改集异常状态原因。
         * @example `too many changes`
         */
        StatusReason: string;
        /**
         * 创建时间。按照ISO8601标准表示，需使用UTC时间，格式：YYYY-MM-DDThh:mm:ss。
         * @example `2019-08-01T05:16:31`
         */
        CreateTime: string;
        /**
         * 更改集ID。
         * @example `1f6521a4-05af-4975-afe9-bc4b45ad****`
         */
        ChangeSetId: string;
        /**
         * 更改集所属资源栈名称。
         * @example `MyStack`
         */
        StackName: string;
        /**
         * 更改集执行状态。
         * @example `AVAILABLE`
         */
        ExecutionStatus: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
