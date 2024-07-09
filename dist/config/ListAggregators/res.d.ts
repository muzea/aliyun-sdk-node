export interface ListAggregatorsResponse {
    /**
     * 请求ID。
     * @example `20C8526D-12C5-4336-BC72-EBD5D1BA732F`
     */
    RequestId: string;
    /**
     * 账号组结果列表。
     */
    AggregatorsResult: {
        /**
         * 当请求的返回结果被截断时，您可以使用`NextToken`再次发起请求，获取从当前截断位置之后的内容。
         * @example `TGlzdFJlc291cmNlU2hhcmVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0`
         */
        NextToken: string;
        /**
         * 账号组列表。
         */
        Aggregators: {
            /**
             * 创建账号组的时间戳。
             * @example `1623036305000`
             */
            AggregatorCreateTimestamp: number;
            /**
             * 账号组内的成员账号数量。
             * @example `2`
             */
            AggregatorAccountCount: number;
            /**
             * 账号组描述。
             * @example `测试组`
             */
            Description: string;
            /**
             * 账号组名称。
             * @example `Test_Group`
             */
            AggregatorName: string;
            /**
             * 账号组状态。取值：
             * - 0：创建中。
             * - 1：创建完成。
             * @example `1`
             */
            AggregatorStatus: number;
            /**
             * 账号组类型。取值：
             * - RD：全局账号组。
             * - FOLDER：资源夹账号组。
             * - CUSTOM：自定义账号组。
             * @example `CUSTOM`
             */
            AggregatorType: string;
            /**
             * 创建账号组的企业管理账号ID。
             * @example `100931896542****`
             */
            AccountId: number;
            /**
             * 账号组ID。
             * @example `ca-88ea626622af0055****`
             */
            AggregatorId: string;
            FolderId: string;
        }[];
    };
}
