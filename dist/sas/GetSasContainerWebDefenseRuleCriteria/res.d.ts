export interface GetSasContainerWebDefenseRuleCriteriaResponse {
    /**
     * 唯一请求ID。
     * @example `F8B6F758-BCD4-597A-8A2C-DA5A552C****`
     */
    RequestId: string;
    /**
     * 查询的对象列表。
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
         * @example `name`
         */
        Name: string;
        /**
         * **Type**（查询条件的类型）为**select**（选择型）时，可选项的值。
         * > **Type**（查询条件的类型）为**input**（输入型）时，该参数返回值为空。
         * @example `athor_bid`
         */
        Values: string;
    }[];
}
