export interface ResetHotlineNumberRequest {
    /**
     * AICCS实例ID。可在智能联络中心控制台上获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 热线号码。
     * @example `0571********`
     */
    "HotlineNumber": string;
    /**
     * 号码描述。
     * @example `热线号码`
     */
    "Description": string;
    /**
     * 是否用于入呼。
     * @example `true`
     */
    "EnableInbound": boolean;
    /**
     * 入呼IVR流程ID。
     * @example `123456`
     */
    "InboundFlowId"?: number;
    /**
     * 是否用于外呼。
     * @example `true`
     */
    "EnableOutbound": boolean;
    /**
     * 外呼是否对所有部门生效。
     * @example `true`
     */
    "OutboundAllDepart": boolean;
    /**
     * 是否开启入呼满意度。
     * @example `true`
     */
    "EnableInboundEvaluation": boolean;
    /**
     * 是否开启外呼满意度。
     * @example `true`
     */
    "EnableOutboundEvaluation": boolean;
    /**
     * 满意度等级。取值：
     * - **2**：二级（满意，不满意）
     * - **3**：三级（满意，一般，不满意）
     * - **4**：四级（很满意，满意，一般，不满意）
     * - **5**：五级（很满意，满意，一般，不满意，非常差）
     * @example `2`
     */
    "EvaluationLevel"?: number;
    /**
     * 外呼生效范围。
     */
    "OutboundRangeList"?: {
        /**
         * 生效部门ID。
         * @example `123456`
         */
        DepartmentId: number;
        /**
         * 生效技能组列表。
         * > 技能组列表为空则对整个部门生效，否则针对部门下指定技能组列表生效。
         */
        GroupIdList: number[];
    }[];
}
