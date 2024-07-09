export interface CreatePropertyResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 创建结果。
     */
    CreateResult: {
        /**
         * 属性ID。
         * @example `390`
         */
        PropertyId: number;
        /**
         * 属性名。
         * @example `department`
         */
        PropertyKey: string;
        /**
         * 属性值创建结果。
         */
        SavePropertyValueModel: {
            /**
             * 创建成功的属性值。
             */
            SavePropertyValues: {
                /**
                 * 属性值ID。
                 * @example `978`
                 */
                PropertyValueId: number;
                /**
                 * 属性值。
                 * @example `HR`
                 */
                PropertyValue: string;
            }[];
            /**
             * 创建失败的属性值。
             */
            FailedPropertyValues: {
                /**
                 * 属性值ID。
                 * @example `390`
                 */
                PropertyId: number;
                /**
                 * 属性值。
                 * @example `HR`
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
