export interface DeleteMaterialByIdRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `cd327c3d5d5e44159cc716e23bfa530e_p_beebot_public`
     */
    "AgentKey": string;
    /**
     * 主键ID
     * @example `10`
     */
    "Id": number;
}
