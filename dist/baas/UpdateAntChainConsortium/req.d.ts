export interface UpdateAntChainConsortiumRequest {
    /**
     * 联盟ID
     * @example `q0oWq92P`
     */
    "ConsortiumId": string;
    /**
     * 联盟名称
     * @example `联盟名称`
     */
    "ConsortiumName": string;
    /**
     * 联盟描述
     * @example `测试联盟`
     */
    "ConsortiumDescription"?: string;
}
