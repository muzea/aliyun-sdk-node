export interface SaveFavoritesRequest {
    /**
     * 收藏作品的用户ID。此处的用户ID为Quick BI的UserID，而非阿里云的UID。
     * @example `121344444790****`
     */
    "UserId": string;
    /**
     * 收藏作品的ID。
     * @example `d23e84a1-82a0-4292-bfdb-521306c3****`
     */
    "WorksId": string;
}
