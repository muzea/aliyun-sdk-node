export interface ListIncidentDetailEscalationPlansResponse {
    /**
     * Id of the request
     * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 升级策略ID
         * @example `312123`
         */
        escalationPlanId: number;
        /**
         * 升级策略名称
         * @example `升级策略A`
         */
        escalationPlanName: string;
        /**
         * 未完结升级策略规则列表
         */
        unFinishEscalationPlan: {
            /**
             * 升级策略类型 UN_ACKNOWLEDGE
             * @example `UN_FINISH`
             */
            escalationPlanType: string;
            /**
             * 延迟时间
             * @example `10`
             */
            noticeTime: number;
            /**
             * 规则触发状态
             * @example `UPGRADE`
             */
            status: string;
            /**
             * 开始时间
             * @example `1629872386027`
             */
            startTime: number;
            /**
             * 分配渠道
             */
            noticeChannels: string[];
            /**
             * 用户信息
             */
            noticeObjectList: {
                /**
                 * 分配对象id
                 * @example `2311`
                 */
                noticeObjectId: number;
                /**
                 * 分配对象名称
                 * @example `小明`
                 */
                noticeObjectName: string;
                /**
                 * 手机号
                 * @example `130xxxxxxxx`
                 */
                noticeObjectPhone: string;
                /**
                 * 角色列表
                 */
                roleNameList: string[];
            }[];
            /**
             * 消息群
             */
            serviceGroupList: {
                /**
                 * 服务组id
                 * @example `123132`
                 */
                id: number;
                /**
                 * 服务组名称
                 * @example `服务组A`
                 */
                name: string;
            }[];
            /**
             * 角色ID列表
             */
            noticeRoleList: number[];
            /**
             * 角色对象列表
             */
            noticeRoleObjectList: {
                id: number;
                name: string;
            }[];
        }[];
        /**
         * 未响应升级策略
         */
        nuAcknowledgeEscalationPlan: {
            /**
             * 升级策略类型 UN_ACKNOWLEDGE
             * @example `UN_ACKNOWLEDGE`
             */
            escalationPlanType: string;
            /**
             * 延迟时间
             * @example `10`
             */
            noticeTime: number;
            /**
             * 规则触发状态
             * @example `UPGRADE`
             */
            status: string;
            /**
             * 开始时间
             * @example `1629872386027`
             */
            startTime: number;
            /**
             * 分配渠道
             */
            noticeChannels: string[];
            /**
             * 用户信息
             */
            noticeObjectList: {
                /**
                 * 分配对象id
                 * @example `31231`
                 */
                noticeObjectId: number;
                /**
                 * 分配对象名称
                 * @example `小华`
                 */
                noticeObjectName: string;
                /**
                 * 分配对象手机号
                 * @example `130xxxxxxxxx`
                 */
                noticeObjectPhone: string;
                /**
                 * 角色列表
                 */
                roleNameList: string[];
            }[];
            /**
             * 通知群
             */
            serviceGroupList: {
                /**
                 * 服务组id
                 * @example `1231`
                 */
                id: number;
                /**
                 * 服务组名称
                 * @example `服务组A`
                 */
                name: string;
            }[];
            /**
             * 角色ID列表
             */
            noticeRoleList: number[];
            noticeRoleObjectList: {
                id: number;
                name: string;
            }[];
        }[];
        /**
         * 未响应升级策略
         */
        convergenceEscalationPlan: {
            /**
             * 升级策略类型 UN_ACKNOWLEDGE
             * @example `UN_ACKNOWLEDGE`
             */
            escalationPlanType: string;
            /**
             * 收敛目标值
             * @example `10`
             */
            noticeTime: number;
            /**
             * 规则触发状态
             * @example `UPGRADE`
             */
            status: string;
            /**
             * 已收敛次数
             * @example `1629872386027`
             */
            startTime: number;
            /**
             * 分配渠道
             */
            noticeChannels: string[];
            /**
             * 用户信息
             */
            noticeObjectList: {
                /**
                 * 分配对象id
                 * @example `31231`
                 */
                noticeObjectId: number;
                /**
                 * 分配对象名称
                 * @example `小华`
                 */
                noticeObjectName: string;
                /**
                 * 分配对象手机号
                 * @example `130xxxxxxxxx`
                 */
                noticeObjectPhone: string;
                /**
                 * 角色列表
                 */
                roleNameList: string[];
            }[];
            /**
             * 通知群
             */
            serviceGroupList: {
                /**
                 * 服务组id
                 * @example `1231`
                 */
                id: number;
                /**
                 * 服务组名称
                 * @example `服务组A`
                 */
                name: string;
            }[];
        }[];
    };
}
