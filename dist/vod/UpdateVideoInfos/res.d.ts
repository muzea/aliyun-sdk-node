export interface UpdateVideoInfosResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    /**
     * 被禁止操作的音/视频ID列表（一般由于无[权限](~~113600~~)导致）。
     */
    ForbiddenVideoIds: string[];
    /**
     * 不存在的音/视频ID列表。
     */
    NonExistVideoIds: string[];
}
