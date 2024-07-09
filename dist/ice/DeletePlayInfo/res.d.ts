export interface DeletePlayInfoResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 出现获取错误的媒体流URL列表，一般由于媒资ID不存在或媒资流URL不存在导致。
     */
    IgnoredList: string[];
    /**
     * 不可删除的媒体流URL列表。一般由于无权限导致。
     */
    ForbiddenList: string[];
}
