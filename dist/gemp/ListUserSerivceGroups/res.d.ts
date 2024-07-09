export interface ListUserSerivceGroupsResponse {
    /**
     * Id of the request
     * @example `2b63cdef-7ac3-4892-a76d-0f3389ef7291`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * RAM子账号ID
         * @example `321`
         */
        ramId: number;
        /**
         * 用户ID
         * @example `321`
         */
        userId: number;
        /**
         * 用户昵称
         * @example `小明`
         */
        username: string;
        /**
         * 手机号
         * @example `1390000****`
         */
        phone: string;
        /**
         * 邮箱
         * @example `12121****@163.com`
         */
        email: string;
        /**
         * 人员所属服务组
         */
        serviceGroups: {
            /**
             * 服务组id
             * @example `123`
             */
            serviceGroupId: number;
            /**
             * 服务组名称
             * @example `服务组A`
             */
            serviceGroupName: string;
            /**
             * 服务组描述
             * @example `描述`
             */
            serviceGroupDescription: string;
        }[];
    };
}
