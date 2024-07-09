export interface ListPropertyResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 属性信息。
     */
    Properties: {
        /**
         * 属性ID。
         * @example `30`
         */
        PropertyId: number;
        /**
         * 属性名。
         * @example `department`
         */
        PropertyKey: string;
        /**
         * 属性值信息。
         */
        PropertyValues: {
            /**
             * 属性值ID。
             * @example `42`
             */
            PropertyValueId: number;
            /**
             * 属性值。
             * @example `A`
             */
            PropertyValue: string;
        }[];
    }[];
}
