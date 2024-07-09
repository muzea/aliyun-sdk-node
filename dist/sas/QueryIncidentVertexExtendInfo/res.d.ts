export interface QueryIncidentVertexExtendInfoResponse {
    /**
     * 本次调用返回的节点扩展信息列表。
     */
    VertexExtendInfo: {
        /**
         * 当前节点的ID。
         * @example `1377`
         */
        Id: string;
        /**
         * 当前节点的名称。
         * @example `oval:com.redhat.rhsa:def:20193878`
         */
        Name: string;
        /**
         * 当前节点的类型。取值包括但不限于：
         * - **process:** 进程
         * - **file:** 文件
         * - **alert:** 告警
         * - **ip:** IP地址
         * - **domain:** 域名
         * @example `ip`
         */
        Type: string;
        /**
         * 当前节点的创建时间。
         * @example `2021-11-06 11:00:00`
         */
        Time: string;
        /**
         * 当前节点的创建时间戳（unix时间戳，单位毫秒）。
         * @example `1645168444`
         */
        Timestamp: number;
        /**
         * 当前节点的UUID。
         * @example `678e29f4-d78f-4a7c-a2bc-38434a13****`
         */
        Uuid: string;
        /**
         * 生成当前节点的规则ID。
         * @example `400035`
         */
        RuleId: string;
        /**
         * 当前节点的属性信息文本。
         * @example `DIRECTORY`
         */
        Properties: string;
        /**
         * 当前节点的属性。
         */
        Property: {
            /**
             * 告警描述。
             * @example `exploit`
             */
            AlertDesc: string;
            /**
             * 日志ID。
             * @example `abc4990f2e1948eb960a2bb7ac0f****`
             */
            LogUuid: string;
            /**
             * 修改时间。
             * @example `2023-05-08 20:06:07`
             */
            GmtModified: string;
            /**
             * 告警ID。
             * @example `alert-abc4990f2e1948eb960a2bb7ac0****`
             */
            AlertUuid: string;
            /**
             * 告警类型。
             * @example `attack_alert`
             */
            AlertType: string;
            /**
             * 告警源产品模块。
             * @example `aegis`
             */
            AlertSrcProdModule: string;
            /**
             * ATT&CK
             * @example `Keychain`
             */
            AttCk: string;
            /**
             * 告警名称Code。
             * @example `6367`
             */
            AlertNameCode: string;
            /**
             * 告警详情。
             * @example `{}`
             */
            AlertDetail: string;
            /**
             * 告警发生时间。
             * @example `2022-11-24T10:13Z`
             */
            OccurTime: string;
            /**
             * 告警类型Code。
             * @example `112`
             */
            AlertTypeCode: string;
            /**
             * 告警等级。取值：
             * - **serious:** 高危
             * - **suspicious:** 中危
             * - **remind:** 低危
             * @example `serious`
             */
            AlertLevel: string;
            /**
             * 资产列表。
             * @example `[]`
             */
            AssetList: string;
            /**
             * 创建时间。
             * @example `2022-11-24T10:13Z`
             */
            GmtCreate: string;
            /**
             * 告警类型（英文）。
             * @example `attack_alert`
             */
            AlertTypeEn: string;
            /**
             * 日志时间。
             * @example `2022-11-24T10:13Z
            `
             */
            LogTime: string;
            /**
             * 告警标题。
             * @example `login_common_account`
             */
            AlertTitle: string;
            /**
             * 告警名称（英文）。
             * @example `attack_alert`
             */
            AlertNameEn: string;
            /**
             * 告警源产品。
             * @example `sas`
             */
            AlertSrcProd: string;
            /**
             * 主用户ID。
             * @example `168370268****`
             */
            MainUserId: string;
            /**
             * 云Code。
             * @example `alibaba_cloud`
             */
            CloudCode: string;
            /**
             * 告警名称。
             * @example `pt_device_in_bps_down_alert`
             */
            AlertName: string;
            /**
             * 实例列表。
             * @example `[
                  "003d544744249351****"
            ]`
             */
            EntityList: string;
            /**
             * 子用户ID。
             * @example `11689082709****`
             */
            SubUserId: string;
        };
        /**
         * 阿里云账号ID。
         * @example `116890827098****`
         */
        Aliuid: string;
        /**
         * 相邻节点列表。
         */
        NeighborList: {
            /**
             * 节点类型。取值包括但不限于：
             * - **process:** 进程
             * - **file:** 文件
             * - **alert:** 告警
             * - **ip:** IP地址
             * - **domain:** 域名
             * @example `process`
             */
            Type: string;
            /**
             * 节点数量。
             * @example `2`
             */
            Count: number;
            /**
             * 是否有更多。取值：
             * - **true:**  有更多相邻节点
             * - **false:**  没有更多相邻节点
             * @example `true`
             */
            HasMore: boolean;
        }[];
        /**
         * 展示列表。
         */
        DisplayInfo: {
            /**
             * 展示信息属性名称。
             * @example `服务器防护`
             */
            Name: string;
            /**
             * 展示信息属性值。
             * @example `app:nxueo`
             */
            Value: string;
        }[];
        /**
         * 本次请求结果需要渲染的语言。取值：
         * - **zh:** 中文
         * - **en:** 英文
         * @example `zh`
         */
        Lang: string;
    }[];
    /**
     * 本次调用是否成功。取值：
     * - **true**: 请求成功
     * - **false**: 请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0BCDBBF1-0048-535A-8529-67EA0CD1****`
     */
    RequestId: string;
    /**
     * 本次调用返回的结果条数。
     * @example `2`
     */
    Count: string;
}
