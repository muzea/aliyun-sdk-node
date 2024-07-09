export interface ListAvatarsRequest {
    /**
     * - 分页页码
     * - 默认值：1
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * - 分页页面大小
     * - 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * - 数字人类型
     * - 2DAvatar
     * @example `2DAvatar`
     */
    "AvatarType"?: string;
}
