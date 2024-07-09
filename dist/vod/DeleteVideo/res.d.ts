export interface DeleteVideoResponse {
    /**
     * 请求ID。
     * @example `E4EBD2BF-5EB0-4476-8829-9D94E1B1****`
     */
    RequestId: string;
    /**
     * 被禁止操作的视频ID列表。
     * > 一般由于无[权限](~~113600~~)导致。
     */
    ForbiddenVideoIds: string[];
    /**
     * 不存在的视频ID列表。
     */
    NonExistVideoIds: string[];
}
