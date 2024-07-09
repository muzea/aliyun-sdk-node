export interface DescribeHanaInstancesResponse {
    /**
     * 请求ID。
     * @example `4003DD68-3C3C-5071-B4FC-631A6C1BAC1C`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回码。200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 分页页码。从1开始，默认值为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页大小。最小值为1，最大值为99，默认值为10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `21`
     */
    TotalCount: number;
    Hanas: {
        /**
         * SAP HANA实例列表。
         */
        Hana: {
            /**
             * SAP HANA实例状态：
             * * INITIALIZING：初始化中。
             * * INITIALIZED：已注册。
             * * INVALID\_HANA\_NODE：为无效的HANA节点。
             * * INITIALIZE_FAILED：安装客户端失败。
             * @example `INITIALIZED`
             */
            Status: number;
            /**
             * SAP HANA主节点的私有或内网IP地址。
             * @example `47.100.XX.XX`
             */
            Host: string;
            /**
             * 备份仓库ID。
             * @example `v-0000s974******1hl`
             */
            VaultId: string;
            /**
             * 是否使用SSL安全连接方式连接数据库。
             * - true：使用SSL安全连接方式连接数据库。
             * - false：不使用SSL安全连接方式连接数据库。
             * @example `true`
             */
            UseSsl: boolean;
            /**
             * SAP HANA名称。
             * @example `HANA-DEV`
             */
            HanaName: string;
            /**
             * 安装SAP HANA时指定的实例编号。
             * @example `00`
             */
            InstanceNumber: number;
            /**
             * 打开验证SSL证书开关后，表示验证数据库服务端SSL证书。
             * @example `false`
             */
            ValidateCertificate: boolean;
            /**
             * 告警设置。取值为INHERITED，表示使用与备份库一致的报警方式。
             * @example `INHERITED`
             */
            AlertSetting: string;
            /**
             * SYSTEMDB数据库的用户名。
             * @example `admin`
             */
            UserName: string;
            /**
             * 状态信息。
             * @example `INSTALL_CLIENT_FAILED`
             */
            StatusMessage: string;
            /**
             * SAP HANA实例ID。
             * @example `cl-0004cf6g6******0yd7y`
             */
            ClusterId: string;
            Tags: {
                /**
                 * SAP HANA实例标签。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `ace:rm:rgld`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `rg-acfmwutpyat2kwy`
                     */
                    Value: string;
                }[];
            };
            /**
             * 资源组ID。
             * @example `rg-acfmvnf22m7itha`
             */
            ResourceGroupId: string;
            /**
             * 跨账号备份类型。支持：
             * - **SELF_ACCOUNT**：本账号备份
             * - **CROSS_ACCOUNT**：跨账号备份
             * @example `CROSS_ACCOUNT`
             */
            CrossAccountType: string;
            /**
             * 被当前账号管理的跨账号备份的原账号ID。
             * @example `158975xxxxx4625
            `
             */
            CrossAccountUserId: number;
            /**
             * 被当前账号管理的跨账号备份的原账号RAM中创建的角色名。
             * @example `hbrcrossrole`
             */
            CrossAccountRoleName: string;
        }[];
    };
}
