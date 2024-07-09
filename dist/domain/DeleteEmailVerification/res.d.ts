export interface DeleteEmailVerificationResponse {
    /**
     * 请求ID。
     * @example `7A3D0E4A-0D4B-4BD0-90D7-A61DF8DD26AE`
     */
    RequestId: string;
    /**
     * 邮箱删除成功列表。
     */
    SuccessList: {
        /**
         * 删除成功的邮箱。
         * @example `test2@aliyun.com`
         */
        Email: string;
        /**
         * 返回code。
         * @example `Success`
         */
        Code: string;
        /**
         * 邮箱删除成功返回的信息。
         * @example `Success`
         */
        Message: string;
    }[];
    /**
     * 邮箱删除失败列表。
     */
    FailList: {
        /**
         * 删除失败的邮箱。
         * @example `test1@aliyun.com`
         */
        Email: string;
        /**
         * 返回code。
         * @example `ParameterIllegall`
         */
        Code: string;
        /**
         * 邮箱删除失败返回的信息。
         * @example `Parameter error`
         */
        Message: string;
    }[];
}
