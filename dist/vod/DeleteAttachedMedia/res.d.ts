export interface DeleteAttachedMediaResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    /**
     * 删除失败的辅助媒资ID。
     */
    NonExistMediaIds: string[];
}
