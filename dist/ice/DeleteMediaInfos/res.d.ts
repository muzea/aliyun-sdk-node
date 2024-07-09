export interface DeleteMediaInfosResponse {
    /**
     * 请求ID
     * @example `0622C702-41BE-467E-AF2E-883D4517962E`
     */
    RequestId: string;
    /**
     * 出现获取错误的ID或InputURL（与用户输入一致）列表。
     */
    IgnoredList: string[];
    /**
     * 不可删除的媒资ID或URL（与用户输入一致）列表。一般由于无权限导致。
     */
    ForbiddenList: string[];
}
