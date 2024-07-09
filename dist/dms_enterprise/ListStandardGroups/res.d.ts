export interface ListStandardGroupsResponse {
    /**
     * 请求ID。
     * @example `34E01EDD-6A16-4CF0-9541-C644D1BE01AA`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `xxx`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `403`
     */
    ErrorCode: string;
    /**
     * 安全规则集列表。
     */
    StandardGroupList: {
        /**
         * 安全规则集名称。
         * @example `金融线-生产`
         */
        GroupName: string;
        /**
         * 安全规则集描述。
         * @example `金融线生产环境实例规则`
         */
        Description: string;
        /**
         * 实例引擎类型，取值请参见[DbType参数说明](~~198106~~)。
         * @example `mysql`
         */
        DbType: string;
        /**
         * 最近修改人的用户ID。
         * @example `51****`
         */
        LastMenderId: number;
        /**
         * 管控模式，返回值如下：
         * - **NONE_CONTROL**：自由操作
         * - **STABLE**：稳定变更
         * - **COMMON**：安全协同
         * @example `COMMON`
         */
        GroupMode: string;
        /**
         * 安全规则集ID。
         * @example `41****`
         */
        GroupId: number;
    }[];
}
