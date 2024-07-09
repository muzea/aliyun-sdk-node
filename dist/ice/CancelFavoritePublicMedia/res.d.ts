export interface CancelFavoritePublicMediaResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 取消收藏不成功的ID列表。
     */
    IgnoredList: string[];
}
