export interface AddAccountRelationResponse {
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息
     * @example `返回信息`
     */
    Message: string;
    /**
     * 请求标识
     * @example `请求标识`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据
     */
    Data: {
        /**
         * 请求来源ip
         * @example `HostId`
         */
        HostId: string;
        /**
         * 关联关系id
         * @example `RelationId`
         */
        RelationId: number;
    };
}
