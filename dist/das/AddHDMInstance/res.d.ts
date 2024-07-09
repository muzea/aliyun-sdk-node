export interface AddHDMInstanceResponse {
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 备用参数。
     * @example `None`
     */
    Synchro: string;
    /**
     * 详细信息列表，包括信息总数、错误码等。
     */
    Data: {
        /**
         * VPC ID。
         * @example `vpc-m5e666n89m2bx8jar****`
         */
        VpcId: string;
        /**
         * 客户端token（即自定义的唯一随机字符串）。
         * @example `tokenID`
         */
        Token: string;
        /**
         * 实例的IP连接地址。
         * @example `rm-de21209****.mysql.rds.aliyuncs.com`
         */
        Ip: string;
        /**
         * 调用者用户ID。
         * @example `31063db679****`
         */
        CallerUid: string;
        /**
         * 实例的ID。
         * @example `rm-2ze1jdv45i7l6****`
         */
        InstanceId: string;
        /**
         * 目标实例的端口。
         * @example `3306`
         */
        Port: number;
        /**
         * 所有者ID。
         * @example `325352345`
         */
        OwnerId: string;
        /**
         * 实例的唯一标识符号。
         * @example `hdm_3063db6792965c080a4bcb6e6304****`
         */
        Uuid: string;
        /**
         * 错误消息。
         * @example `InvalidRequestURL`
         */
        Error: string;
        /**
         * 返回的状态码。
         * @example `200`
         */
        Code: number;
        /**
         * 角色信息。
         * @example `master`
         */
        Role: string;
        /**
         * 所属的租户ID。
         * @example `L0EPfLS****=SCE00000*****`
         */
        TenantId: string;
    };
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
