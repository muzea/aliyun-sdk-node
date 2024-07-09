export interface GetImageResponse {
    /**
     * 请求ID。
     * @example `5A14FA81-DD4E-******-6343FE44B941`
     */
    RequestId: string;
    /**
     * 镜像的创建UTC时间，格式ISO8601。
     * @example `2021-01-21T17:12:35.232Z`
     */
    GmtCreateTime: string;
    /**
     * 镜像的修改UTC时间，格式ISO8601。
     * @example `2021-01-21T17:12:35.232Z`
     */
    GmtModifiedTime: string;
    /**
     * 镜像名称。
     * @example `nlp-compression
    `
     */
    Name: string;
    /**
     * 镜像描述。
     * @example `NLP模型压缩训练镜像
    `
     */
    Description: string;
    /**
     * 镜像地址，包含版本号。
     * @example `registry.cn-hangzhou.aliyuncs.******ession/nlp:gpu
    `
     */
    ImageUri: string;
    /**
     * 创建镜像的UID。
     * @example `15577******8921`
     */
    UserId: string;
    /**
     * 创建者的阿里云账号。
     * @example `15577******8921`
     */
    ParentUserId: string;
    /**
     * 镜像标签列表，数组类型，数组每一项包含Key和Value两个字段。
     * 官方镜像带有标签：key为system.official；value为true。
     */
    Labels: {
        /**
         * 标签的键。
         * @example `system.chipType
        `
         */
        Key: string;
        /**
         * 标签的值。
         * @example `GPU`
         */
        Value: string;
    }[];
    /**
     * 镜像所属的工作空间ID。
     * @example `15945`
     */
    WorkspaceId: string;
    /**
     * 镜像的可见性，可能值：
     * - PUBLIC：当前工作空间所有成员都可以操作。
     * - PRIVATE：只有创建者可以操作。
     * @example `PUBLIC`
     */
    Accessibility: string;
    /**
     * 镜像大小，单位为GB。
     * @example `10`
     */
    Size: number;
}
