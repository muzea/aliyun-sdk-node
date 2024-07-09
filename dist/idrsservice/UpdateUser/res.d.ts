export interface UpdateUserResponse {
    /**
     * 错误信息
     * @example `无`
     */
    Message: string;
    /**
     * 请求 ID
     * @example `84118BF0-56F7-54D2-8C1A-35BBBBD5016B`
     */
    RequestId: string;
    /**
     * 数据
     * @example `{'Id': '5073e5f4-99c6-4bb1-bd6c-30ab12f11059', 'CreatedAt': '2021-12-29T11:31:53.072+08:00'}`
     */
    Data: any;
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
}
