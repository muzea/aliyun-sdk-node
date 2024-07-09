export interface UpdatePropertyRequest {
    /**
     * 要修改的属性ID。您可以调用[ListProperty](~~ListProperty~~)进行查询。
     * @example `390`
     */
    "PropertyId": number;
    /**
     * 修改后的属性名。
     * @example `testkey`
     */
    "PropertyKey": string;
    /**
     * 要修改的属性值。
     */
    "PropertyValues"?: {
        /**
         * 要修改的属性值ID。您可以调用[ListProperty](~~ListProperty~~)进行查询。
         * @example `978`
         */
        PropertyValueId: number;
        /**
         * 修改后的属性值。
         * @example `testvalue`
         */
        PropertyValue: string;
    }[];
}
