export interface QueryCustomAuthPermissionResponse {
    /**
     * Id of the request
     * @example `63309FDB-ED6C-46AE-B31C-A172FBA0****`
     */
    RequestId: string;
    /**
     * 响应code。
     * @example `200`
     */
    Code: number;
    /**
     * 表示是否调用成功。true：调用成功。                                 false：调用失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回结果的提示信息。
     * @example `operation success.`
     */
    Message: string;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 返回数据。
         */
        Results: {
            /**
             * 用户名或客户端ID。
             * @example `test`
             */
            Identity: string;
            /**
             * 授权操作。
             * @example `PUB_SUB`
             */
            PermitAction: string;
            /**
             * 允许或拒绝。
             * @example `ALLOW`
             */
            Effect: string;
            /**
             * 身份类型。
             * - USER：仅用户名。
             * - CLIENT：具体到客户端。
             * @example `USER`
             */
            IdentityType: string;
            /**
             * Topic资源信息，支持MQTT多级topic与通配符。
             * @example `test`
             */
            Topic: string;
        }[];
        /**
         * 用来标记当前查询结束的位置，以便下一次调用时作为参数传入，继续翻页。首次调用或返回最后一页时，取值为空字符串。
         * @example `AAAAAV/vsqTyeMlX1MIk7/b6NrZLIlsSVf49O04ac7HAmlBoaYspakK7ZZkR3vRDp5Y9Nz0EmuWYrtF+1qkUwuJzPk/qEto/FGxl5Kd+qdwNt3t8`
         */
        NextToken: string;
    };
}
