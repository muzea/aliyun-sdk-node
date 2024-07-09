export interface CancelCollectionRequest {
    /**
     * 取消收藏的作品ID。
     * @example `5d6ae4e7-cede-43cd-b4d3-d2fd442a9202`
     */
    "WorksId": string;
    /**
     * 收藏用户的ID。此处的用户ID为Quick BI的UserID，而非阿里云的UID。
     * @example `121344444790****`
     */
    "UserId": string;
}
