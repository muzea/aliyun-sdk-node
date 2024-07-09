export interface ListSupportResourceTypesResponse {
    /**
     * 支持的资源类型列表。
     */
    SupportResourceTypes: {
        /**
         * 云服务代码。
         * @example `ecs`
         */
        ProductCode: string;
        /**
         * 资源类型。
         * @example `instance`
         */
        ResourceType: string;
        /**
         * 支持的标签能力项列表。
         * > 当`ShowItems`为`true`时，才显示该参数。
         */
        SupportItems: {
            /**
             * 标签能力项代码。
             * @example `TAG_CONSOLE_SUPPORT`
             */
            SupportCode: string;
            /**
             * 是否支持该标签能力项。取值：
             * - true：支持。
             * - false：不支持。
             * @example `true`
             */
            Support: boolean;
            /**
             * 该能力项的支持详情列表。
             */
            SupportDetails: any[];
        }[];
    }[];
    /**
     * 请求ID。
     * @example `ABC71772-F3A1-59CA-B811-4A5B0E0B72F8`
     */
    RequestId: string;
    /**
     * 根据`NextToken`判断是否具备下一个查询开始的Token。取值：
     * - 如果`NextToken`为空，表示没有下一个。
     * - 如果`NextToken`有值，则该值就是下一个查询开始的Token。
     * @example `AAAAAYws9fJ0Ur4MGm`
     */
    NextToken: string;
}
