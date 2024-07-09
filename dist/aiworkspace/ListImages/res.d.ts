export interface ListImagesResponse {
    /**
     * 请求ID。
     * @example `5A14FA81-DD4E-******-6343FE44B941`
     */
    RequestId: string;
    /**
     * 返回的镜像总量。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 镜像列表。
     */
    Images: {
        /**
         * 镜像名称。
         * @example `tensorflow_2.9`
         */
        Name: string;
        /**
         * 创建UTC时间，日期格式为ISO8601。
         * @example `2021-01-21T17:12:35.232Z`
         */
        GmtCreateTime: string;
        /**
         * 镜像描述。
         * @example `desc`
         */
        Description: string;
        /**
         * 镜像地址，包含版本号。
         * @example `registry-vpc.cn-shanghai.aliyuncs.com/******​/pai:python_3.8.10-tensorflow_2.9.0`
         */
        ImageUri: string;
        /**
         * 镜像标签列表。
         */
        Labels: {
            /**
             * 标签的键。
             * @example `system.chipType`
             */
            Key: string;
            /**
             * 标签的值。
             * @example `GPU`
             */
            Value: string;
        }[];
        /**
         * 镜像ID。
         * @example `image-tzi7f9******s45t`
         */
        ImageId: string;
        /**
         * 镜像的可见性，可能值：
         * - PUBLIC：当前工作空间所有成员都可以操作。
         * - PRIVATE：只有创建者可以操作。
         * @example `PUBLIC`
         */
        Accessibility: string;
        /**
         * 修改UTC时间，格式为ISO8601。
         * @example `2021-01-21T17:12:35.232Z
        `
         */
        GmtModifiedTime: string;
        /**
         * 创建者的阿里云账号UID。
         * @example `155**********904`
         */
        UserId: string;
        /**
         * 创建者的阿里云账号UID。
         * @example `155**********904`
         */
        ParentUserId: string;
        /**
         * 工作空间ID。
         * @example `20******55`
         */
        WorkspaceId: string;
        /**
         * 镜像大小，单位为GB。
         * @example `2`
         */
        Size: number;
    }[];
}
