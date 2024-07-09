export interface ListUserBasicInfosResponse {
    /**
     * 请求ID。
     * @example `EF2B25FD-CADE-445B-BE4D-E082E0FF1A0F`
     */
    RequestId: string;
    /**
     * 请求返回结果是否被截断。取值：
     * - true：已截断。
     * - false：未截断。
     * @example `true`
     */
    IsTruncated: boolean;
    UserBasicInfos: {
        /**
         * RAM用户的基本信息。
         */
        UserBasicInfo: {
            /**
             * RAM用户的登录名称。
             * @example `test@example.onaliyun.com`
             */
            UserPrincipalName: string;
            /**
             * RAM用户的显示名称。
             * @example `test`
             */
            DisplayName: string;
            /**
             * RAM用户ID。
             * @example `20732900249392****`
             */
            UserId: string;
        }[];
    };
    /**
     * 当`IsTruncated`为`true`时才有此参数，当返回`true`时，需要继续调用此接口，并且使用`Marker`获取截断后的内容。
     * @example `EXAMPLE`
     */
    Marker: string;
}
