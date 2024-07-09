export interface CreateDepartmentResponse {
    /**
     * 错误信息
     * @example `11111111`
     */
    Message: string;
    /**
     * 请求 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    RequestId: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 部门描述
         * @example `这是一个部门`
         */
        Description: string;
        /**
         * 测试
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        CreatedAt: string;
        /**
         * 部门名称
         * @example `技术部`
         */
        Name: string;
        /**
         * 部门 ID
         * @example `63bb629d-92bf-4cdc-ad0b-3032c926d23f`
         */
        Id: string;
    };
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
}
