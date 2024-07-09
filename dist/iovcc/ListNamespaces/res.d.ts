export interface ListNamespacesResponse {
    /**
     * Namespace集合
     */
    Namespaces: {
        /**
         * 数据空间划分和鉴权方式。
         * - 1：基于账号
         * - 2：基于设备
         * - 101：基于账号和设备
         * @example `101`
         */
        AuthType: number;
        /**
         * Namespace说明
         * @example `test`
         */
        Description: string;
        /**
         * 所属租户ID
         * @example `123456`
         */
        UserId: string;
        /**
         * 所属项目ID
         * @example `PLR58HKB`
         */
        ProjectId: string;
        /**
         * 创建时间
         * @example `1526871654000`
         */
        GmtCreate: number;
        /**
         * Namespace唯一标识
         * @example `cca8e86c056bdc4fe78751vbf3f26c7k`
         */
        Namespace: string;
        /**
         * 修改时间
         * @example `1526871654000`
         */
        GmtModified: number;
        /**
         * Namespace名称
         * @example `test`
         */
        Name: string;
    }[];
    /**
     * 请求ID
     * @example `E94C9864-56FB-44AD-AC0C-A1CEFB332254`
     */
    RequestId: string;
}
