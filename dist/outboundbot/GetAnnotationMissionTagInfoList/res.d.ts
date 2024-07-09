export interface GetAnnotationMissionTagInfoListResponse {
    /**
     * 是否调用成功。true：表示调用成功。                                 false：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `CDR 'job-efbaeefc-4d45-4e79-83f7-b33b0769c969' doesn't exists.`
     */
    Message: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 标签列表
         */
        AnnotationMissionTagInfoList: {
            /**
             * 标签ID
             * @example `e1ee87ea-ebad-4079-aebb-1c56a4ef0c06`
             */
            AnnotationMissionTagInfoId: string;
            /**
             * 实例ID。
             * @example `3c3b8d1d-deff-48d9-9318-addc80ae5b1e`
             */
            InstanceId: string;
            /**
             * 租户 ID。
             * @example `DING_ORG_dingbd9daecdb7aaed3bffe93478753d9884`
             */
            TenantId: string;
            /**
             * 标签名称
             * @example `用户投诉`
             */
            AnnotationMissionTagInfoName: string;
            /**
             * 标签描述
             * @example `用户投诉`
             */
            AnnotationMissionTagInfoDescription: string;
            /**
             * 是否已删除
             * @example `false`
             */
            Delete: boolean;
        }[];
        /**
         * 是否调用成功。true：表示调用成功。                                 false：表示调用失败。
         * @example `true`
         */
        Success: boolean;
        /**
         * 接口提示信息
         * @example `CDR 'job-efbaeefc-4d45-4e79-83f7-b33b0769c969' doesn't exists.`
         */
        Message: string;
    };
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
}
