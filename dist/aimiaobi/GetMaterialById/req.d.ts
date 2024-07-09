export interface GetMaterialByIdRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `67c520d1fa43455ea44fb69fa402d54d_p_beebot_public`
     */
    "AgentKey": string;
    /**
     * 任务主键ID
     * @example `60`
     */
    "Id": number;
}
