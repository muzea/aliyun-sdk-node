export interface ListCustomEntitiesResponse {
    /**
     * 请求ID，具有唯一性。
     * @example `580e8ce3-3b80-44c5-9f3f-36ac3cc5bdd5`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数量。
     * @example `1`
     */
    TotalCount: number;
    CustomEntities: {
        /**
         * 自定义库实体列表。
         */
        CustomEntity: {
            /**
             * 自定义库实体entityID。
             * @example `1`
             */
            CustomEntityId: string;
            /**
             * 自定义库实体entity名称。
             * @example `exampleName`
             */
            CustomEntityName: string;
            /**
             * 自定义实体的额外信息，JSON String类型。
             * @example `{ "finegrainName":"example" }`
             */
            CustomEntityInfo: string;
        }[];
    };
}
