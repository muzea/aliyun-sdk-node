export interface DsgWhiteListQueryListRequest {
    /**
     * 分页的页数。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示的条数，最大100条。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 二级脱敏场景ID。您可调用[DsgSceneQuerySceneListByName](~~2786322~~)接口获取。
     * @example `123`
     */
    "SceneId": number;
    /**
     * 敏感字段类型的关键字。
     * @example `phone`
     */
    "DataType"?: string;
}
