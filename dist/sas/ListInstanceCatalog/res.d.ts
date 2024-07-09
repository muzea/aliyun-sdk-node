export interface ListInstanceCatalogResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0D42A83F-CE33-5F54-A5AE-05DA39F59E1B`
     */
    RequestId: string;
    /**
     * 根据厂商分类的资产分类列表。
     */
    Vendors: {
        /**
         * 厂商类型名称。
         * @example `ALIYUN`
         */
        Name: string;
        /**
         * 资产类型列表。
         */
        InstanceTypes: {
            /**
             * 资产类型名称。
             * @example `ECS`
             */
            Name: string;
            /**
             * 资产子类型列表。
             */
            InstanceSubTypes: {
                /**
                 * 资产子类型名称。
                 * @example `SECURITY_GROUP`
                 */
                Name: string;
            }[];
        }[];
    }[];
}
