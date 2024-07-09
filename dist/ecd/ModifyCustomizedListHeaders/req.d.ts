export interface ModifyCustomizedListHeadersRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 列表类型。
     * @example `desktop`
     */
    "ListType"?: string;
    /**
     * 表头列表。
     */
    "Headers"?: {
        /**
         * 表头键值。
         * ><notice>所有的HeaderKey都必须传入。></notice>
         * @example `pay_type`
         */
        HeaderKey: string;
        /**
         * 表头的显示类型。
         * ><notice>`desktop_id_name`和`office_site_id_name`的值必须设为`required`，其他HeaderKey的值可按需设为`display`或`hide`。></notice>
         * @example `display`
         */
        DisplayType: string;
    }[];
}
