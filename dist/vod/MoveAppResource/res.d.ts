export interface MoveAppResourceResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A13-BEF6-****`
     */
    RequestId: string;
    /**
     * 不存在的资源ID。
     */
    NonExistResourceIds: string[];
    /**
     * 失败的资源ID。
     */
    FailedResourceIds: string[];
}
