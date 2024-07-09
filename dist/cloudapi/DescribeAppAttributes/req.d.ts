export interface DescribeAppAttributesRequest {
    /**
     * App的编号
     * @example `20112314518278`
     */
    "AppId"?: number;
    /**
     * APP名称
     * @example `testApp`
     */
    "AppName"?: string;
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 指定分页查询时每页行数，最大值100，默认值为10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 应用的APPCode编码
     * @example `23552160`
     */
    "AppCode"?: string;
    /**
     * App的Key，用于调用API时使用
     * @example `203708622`
     */
    "AppKey"?: string;
    /**
     * 排序，默认值是desc，可选asc，desc
     * - asc：按修改时间升序排列；
     * - desc：按修改时间降序排列
     * @example `desc`
     */
    "Sort"?: string;
    /**
     * 是否启用标签验证
     * @example `true`
     */
    "EnableTagAuth"?: boolean;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     * @example `Key， Value`
     */
    "Tag"?: {
        /**
         * 标签值。
         * n 的取值范围为 `[1, 20]`
         * @example `env`
         */
        Key: string;
        /**
         * 标签键。
         * n 的取值范围为 `[1, 20]`
         * @example `' '`
         */
        Value: string;
    }[];
    /**
     * 扩展信息
     * @example `110243810311`
     */
    "Extend"?: string;
}
