export interface GetAllInstanceIdListResponse {
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success.`
     */
    Message: string;
    /**
     * 当前用户下所有地域的实例ID集合。
     * @example `[{"cn-shenzhen": ["alikafka_post-cn-7pp2btvo****"],"us-west-1": ["alikafka_pre-cn-i7m2lxid****"],"cn-hangzhou": ["alikafka_pre-cn-i7m2hflj****","alikafka_pre-cn-zvp2hsje****","alikafka_pre-cn-zvp2kvc9****"]}]`
     */
    InstanceIds: any;
    /**
     * 请求ID。
     * @example `ABA4A7FD-E10F-45C7-9774-A5236015****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
