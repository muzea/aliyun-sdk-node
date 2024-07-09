export interface UpdatePropertyResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 修改结果。
     */
    UpdateResult: {
        /**
         * 属性ID。
         * @example `390`
         */
        PropertyId: number;
        /**
         * 属性名。
         * @example `testkey2`
         */
        PropertyKey: string;
        /**
         * 属性值修改结果。
         */
        SavePropertyValueModel: {
            /**
             * 修改成功的属性值。
             */
            SavePropertyValues: {
                /**
                 * 属性值ID。
                 * @example `978`
                 */
                PropertyValueId: number;
                /**
                 * 属性值。
                 * @example `testvalue2`
                 */
                PropertyValue: string;
            }[];
            /**
             * 修改失败的属性值。
             */
            FailedPropertyValues: {
                /**
                 * 属性ID。
                 * @example `390`
                 */
                PropertyId: number;
                /**
                 * 属性值。
                 * @example `testvalue`
                 */
                PropertyValue: string;
                /**
                 * 错误码。
                 * @example `ExistedPropertyValue`
                 */
                ErrorCode: string;
                /**
                 * 错误信息。
                 * @example `The property value is used by another property.`
                 */
                ErrorMessage: string;
            }[];
        };
    };
}
