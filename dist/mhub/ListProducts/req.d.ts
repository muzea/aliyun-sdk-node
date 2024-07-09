export interface ListProductsRequest {
    /**
     * 当前页码数。
     * @example `1`
     */
    "Offset"?: number;
    /**
     * - 每页可显示的项目的个数。
     * - 取值范围为：1-100。
     * @example `20`
     */
    "Size"?: number;
    /**
     * 设置是否为简化查询。
     * - true：简化查询。不返回encodedIcon和Platforms两个字段。
     * - false：非简化查询。返回全部字段。
     * @example `false`
     */
    "Simple"?: boolean;
    /**
     * 输入关键字，按项目名称模糊查询。
     * @example `我的项目`
     */
    "ProductName"?: string;
}
