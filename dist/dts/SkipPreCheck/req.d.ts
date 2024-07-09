export interface SkipPreCheckRequest {
    /**
     * 预检查任务ID，可以调用**DescribePreCheckStatus**查询。
     * @example ` b4my3zg929a****`
     */
    "JobId"?: string;
    /**
     * 是否屏蔽该预检查项目，取值：
     * - **true**：屏蔽。
     * - **false**：取消屏蔽。
     * > 本参数为必填参数。
     * @example `true`
     */
    "Skip": boolean;
    /**
     * 需屏蔽或取消屏蔽的预检查项目简称，取值：
     * - **CHECK_SAME_OBJ**：同名对象存在性检查。
     * - **CHECK_SAME_USER**：不同名账号存在性检查。
     * - **CHECK_SRC**：源库版本检查。
     * - **CHECK_TOPOLOGY**：拓扑版本检查。
     *    > 目前DTS支持的拓扑版本，请参见[拓扑介绍](~~124115~~)。
     * - **CHECK_SERVER_ID**：源库server_id检查。
     * > 多个项目简称用英文逗号（,）分隔。
     * @example `CHECK_SAME_OBJ`
     */
    "SkipPreCheckItems"?: string;
    /**
     * 需屏蔽或取消屏蔽的预检查项目名称，对应参数**SkipPreCheckItems**，取值：
     * - **CHECK_SAME_OBJ_DETAIL**：同名对象存在性检查。
     * - **CHECK_SAME_USER_DETAIL**：不同名账号存在性检查。
     * - **CHECK_SRC_DETAIL**：源库版本检查。
     * - **CHECK_TOPOLOGY_DETAIL**拓扑版本检查。
     *    > 目前DTS支持的拓扑版本，请参见[拓扑介绍](~~124115~~)。
     * - **CHECK_SERVER_ID_DETAIL**：源库server_id检查。
     * > 多个项目名称用英文逗号（,）分隔。
     * @example `CHECK_SAME_OBJ_DETAIL`
     */
    "SkipPreCheckNames"?: string;
    /**
     * 迁移、同步或订阅任务ID。
     * @example `c7412z57g8k****`
     */
    "DtsJobId": string;
    /**
     * DTS实例所属的地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
