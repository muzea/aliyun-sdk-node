export interface ListDirectionalAddressRequest {
    /**
     * 每页的数量，支持10、15、25、40。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 查询页数，需结合PageSize参数使用。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 定向分组ID。
     * 您可调用接口[GetCardDetail](~~374328~~)在返回参数中查看定向分组ID（DirectionalGroupId）。
     * @example `5`
     */
    "GroupId": string;
}
