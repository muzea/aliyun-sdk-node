export interface GetInstanceEndpointResponse {
    /**
     * 运行状态，取值：
     * `CREATING`：创建中
     * `RUNNING`：运行中
     * `DELETING`：删除中
     * @example `RUNNING`
     */
    Status: string;
    /**
     * 请求ID
     * @example `8F3D5EC5-39D1-4C53-A198-48C54C658FA3`
     */
    RequestId: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 是否启用ACL
     * @example `true`
     */
    AclEnable: boolean;
    /**
     * 是否开启该访问入口
     * @example `true`
     */
    Enable: boolean;
    /**
     * 域名列表
     */
    Domains: {
        /**
         * 域名类型，取值：
         * - `SYSTEM`：系统域名
         * - `USER`：用户域名
         * @example `SYSTEM`
         */
        Type: string;
        /**
         * 访问企业版实例的域名
         * @example `shanghai-instance1-registry.cn-shanghai.cr.aliyuncs.com`
         */
        Domain: string;
    }[];
    /**
     * ACL列表
     */
    AclEntries: {
        /**
         * 添加公网白名单的备注
         * @example `1`
         */
        Comment: string;
        /**
         * 添加公网白名单地址段
         * @example `192.168.1.0/24`
         */
        Entry: string;
    }[];
}
