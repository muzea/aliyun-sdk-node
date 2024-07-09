export interface CreateAgAccountResponse {
    /**
     * 状态码。
     * @example `LOGIN_EMAIL_HAS_BEEN_USED`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `loginEmail=685741089H@chinaunicom.cn,has used`
     */
    Message: string;
    /**
     * 请求id。
     * @example `EAE08A27-386C-579E-966D-8853EC3C5D0E`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * MPK与PK的二级关系
     */
    AgRelationDto: {
        /**
         * 关联关系类型
         * @example `FINACE_CLOUD`
         */
        Type: string;
        /**
         * MPK下PK(UID)
         * @example `1728240534507590`
         */
        Pk: string;
        /**
         * ram角色名称
         * @example `admin-role`
         */
        RamAdminRoleName: string;
        /**
         * MPK（UID）
         * @example `1785287436011964`
         */
        Mpk: string;
    };
}
