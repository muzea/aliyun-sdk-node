export interface ListEnterpriseDingtalkGroupsResponse {
    /**
     * 接口请求的唯一ID, 每次调用requestID唯一
     * @example `12xxxxx`
     */
    RequestId: string;
    /**
     * 调用接口返回是否成功, true代表调用正常
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息, 当success=false的时候, 可以取到message
     * @example `Data Invalid`
     */
    Message: string;
    /**
     * 接口请求结果返回码
     * @example `true`
     */
    Code: string;
    /**
     * 服务钉群列表
     */
    Data: {
        /**
         * 钉群ID
         * @example `123`
         */
        OpenGroupId: string;
        /**
         * 钉群名
         * @example `A公司服务群`
         */
        GroupName: string;
    }[];
}
