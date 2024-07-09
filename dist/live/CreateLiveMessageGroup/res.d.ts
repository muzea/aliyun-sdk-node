export interface CreateLiveMessageGroupResponse {
    /**
     * 请求ID。
     * @example `A8C7B033-B339-1A58-B0E0-7B9197BA****`
     */
    RequestId: string;
    /**
     * 创建的群组ID。
     * @example `grouptest`
     */
    GroupId: string;
    /**
     * 是否已经存在。
     * @example `true`
     */
    AlreadyExists: boolean;
    /**
     * 是否已删除。如果已存在，且被删除了，那么群组ID是处于不可用状态，建议重新创建。
     * @example `true`
     */
    AlreadyDelete: boolean;
}
