export interface DescribeVpcHoneyPotCriteriaResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `FCE38ADB-7361-4212-AD87-A4514E4DF925`
     */
    RequestId: string;
    /**
     * 查询云蜜罐实例时支持的查询条件列表。
     */
    CriteriaList: {
        /**
         * 查询条件的类型。取值：
         * - **input**：输入型。表示使用该查询条件进行查询时需要手动输入查询内容。
         * - **select**：选择型。表示使用该查询条件进行查询时需要从选择项列表（即**Values**值）中选择。
         * @example `select`
         */
        Type: string;
        /**
         * 查询条件的名称。
         * @example `vpcRegionId`
         */
        Name: string;
        /**
         * **Type**（查询条件的类型）为**select**（选择型）时，可选项的值。
         * > **Type**（查询条件的类型）为**input**（输入型）时，该参数返回值为空。
         * @example `ap-southeast-2,eu-west-1`
         */
        Values: string;
    }[];
}
