export interface UpdateDomainGroupResponse {
    /**
     * 域名分组新名称。
     * @example `NewName`
     */
    GroupName: string;
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 域名分组ID。
     * @example `2223`
     */
    GroupId: string;
}
