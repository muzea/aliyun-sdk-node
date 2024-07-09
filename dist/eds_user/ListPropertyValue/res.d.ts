export interface ListPropertyValueResponse {
    /**
     * 请求ID。
     * @example `C52013A5-3422-5D1F-B22C-A57110972AD9`
     */
    RequestId: string;
    /**
     * 属性值列表。
     */
    PropertyValueInfos: {
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
}
