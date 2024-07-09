export interface ListBuildConfigsRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `cd327c3d5d5e44159cc716e23bfa530e_p_beebot_public`
     */
    "AgentKey": string;
    /**
     * 政务和传媒类别,media:传媒,government:政务
     * @example `media`
     */
    "Type"?: string;
}
