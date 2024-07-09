export interface ListPoliciesResponse {
    Policies: {
        /**
         * 权限策略信息。
         */
        Policy: {
            /**
             * 默认版本。
             * @example `v1`
             */
            DefaultVersion: string;
            /**
             * 权限策略描述。
             * @example `OSS管理员权限`
             */
            Description: string;
            /**
             * 修改时间。
             * @example `2015-01-23T12:33:18Z`
             */
            UpdateDate: string;
            /**
             * 引用次数。
             * @example `3`
             */
            AttachmentCount: number;
            /**
             * 权限策略名称。
             * @example `OSS-Administrator`
             */
            PolicyName: string;
            /**
             * 创建时间。
             * @example `2015-01-23T12:33:18Z`
             */
            CreateDate: string;
            /**
             * 权限策略类型。
             * @example `System`
             */
            PolicyType: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `7B8A4E7D-6CFF-471D-84DF-195A7A241ECB`
     */
    RequestId: string;
    /**
     * 请求返回结果是否被截断。
     * @example `true`
     */
    IsTruncated: boolean;
    /**
     * 当`IsTruncated`为`true`时才有此字段，当返回`true`时，需要继续调用此接口，并且使用`Marker`获取截断后的内容。
     * @example `EXAMPLE`
     */
    Marker: string;
}
