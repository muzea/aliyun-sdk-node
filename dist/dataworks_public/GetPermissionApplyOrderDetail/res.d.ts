export interface GetPermissionApplyOrderDetailResponse {
    /**
     * 请求ID。
     * @example `0bc1ec92159376****`
     */
    RequestId: string;
    /**
     * 申请单详情。
     */
    ApplyOrderDetail: {
        /**
         * 提交申请单的阿里云用户UID。
         * @example `26784260040899****`
         */
        ApplyBaseId: string;
        /**
         * 发起申请单的时间，显示为一个unix时间戳。
         * @example `1615284086000`
         */
        ApplyTimestamp: number;
        /**
         * 申请单ID。
         * @example `ad8da78d-8135-455e-9486-27cf213f****`
         */
        FlowId: string;
        /**
         * 申请单的状态。取值如下：
         * - 1：待审批。
         * - 2：审批通过，授权成功。
         * - 3：审批通过，授权失败。
         * - 4：审批拒绝。
         * @example `2`
         */
        FlowStatus: number;
        /**
         * 审批申请单的阿里云账号列表。
         */
        ApproveAccountList: {
            /**
             * 审批申请单的阿里云用户UID。
             * @example `182293110403****`
             */
            BaseId: string;
        }[];
        /**
         * 申请权限的账号信息。
         */
        GranteeObjectList: {
            /**
             * 申请权限的主体类型。目前只支持1（用户）。
             * @example `1`
             */
            GranteeType: number;
            /**
             * 申请权限的主体子类型，取值如下：
             * - 101：生产云账号。
             * - 103：个人云账号。
             * - 105：代他人申请云账号。
             * @example `103`
             */
            GranteeTypeSub: number;
            /**
             * 申请权限的云账号名称。格式与MaxCompute的账号格式一致。
             * - 主账号为ALIYUN$+账号名。
             * - 子账号为RAM$+账号名。
             * @example `RAM$dataworks_3h1_1:StsRamUser(StsRamUser)`
             */
            GranteeName: string;
            /**
             * 申请权限的阿里云用户UID。
             * @example `26784260040899****`
             */
            GranteeId: string;
        }[];
        /**
         * 申请的具体内容。
         */
        ApproveContent: {
            /**
             * 申请的原因，用于管理员审批参考。
             * @example `I need to use this table`
             */
            ApplyReason: string;
            /**
             * 申请权限的到期时间。此处显示为一个unix时间戳。
             * 如果MaxCompute项目未开启LabelSecurity，或申请的表字段安全等级为0或小于等于申请账号的安全等级时，只能申请永久权限。
             * @example `1617115071885`
             */
            Deadline: number;
            /**
             * 申请单类型。目前仅支持取值为1，表示对象ACL权限申请。
             * @example `1`
             */
            OrderType: number;
            /**
             * 申请对象所属的项目和工作空间信息。
             */
            ProjectMeta: {
                /**
                 * 申请对象所在的MaxCompute项目。
                 * @example `aMaxComputeProject`
                 */
                MaxComputeProjectName: string;
                /**
                 * 申请对象所在的DataWorks工作空间ID。
                 * @example `12345`
                 */
                WorkspaceId: number;
                /**
                 * 申请对象的详细信息。
                 */
                ObjectMetaList: {
                    /**
                     * 申请的表名。
                     * @example `aTableName`
                     */
                    ObjectName: string;
                    /**
                     * 申请对象的列字段信息。
                     */
                    ColumnMetaList: {
                        /**
                         * 申请的列名称。
                         * @example `aColumnName`
                         */
                        ColumnName: string;
                        /**
                         * 申请的列描述。
                         * @example `字段描述`
                         */
                        ColumnComment: string;
                        /**
                         * 申请的列安全级别。取值范围为0~9。
                         * @example `9`
                         */
                        SecurityLevel: string;
                    }[];
                }[];
            };
        };
    };
}
