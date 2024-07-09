export interface CheckUsedPropertyValueRequest {
    /**
     * 属性ID。可以调用[ListProperty](~~ListProperty~~)获取该参数。
     * @example `380`
     */
    "PropertyId": number;
    /**
     * 属性值ID。可以调用[ListProperty](~~ListProperty~~)获取该参数。
     * @example `978`
     */
    "PropertyValueId": number;
}
