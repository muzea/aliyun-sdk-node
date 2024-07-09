export interface DescribeExposedInstanceCriteriaResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6D9CDB47-6191-4415-BE63-7E8B12CD4FBE`
     */
    RequestId: string;
    /**
     * 查询暴露资产时支持的查询条件。
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
         * @example `instanceId`
         */
        Name: string;
        /**
         *
         * **Type**（查询条件的类型）为**select**时，可选项的值。
         * > **Type**（查询条件的类型）为**input**时，该参数返回值为空。
         * @example `i-bp19r0fdd39idxhf****`
         */
        Values: string;
    }[];
}
