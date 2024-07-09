export interface ListPSMemberDataTypeCodeRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion": string;
    /**
     * 指定显示返回结果中的第几页，最小取值是1。
     * @example `1`
     */
    "Num": number;
    /**
     * 指定返回结果中每页显示的记录数量，最大值是100。
     * @example `2`
     */
    "Size": number;
    /**
     * 业务链标识。
     * @example `489973087549****`
     */
    "BizChainId": string;
    /**
     * 要查询的阿里云RAM用户UID。
     * > 不传则查询所有阿里云RAM用户UID。
     * @example `19720316234381****`
     */
    "MemberUid"?: string;
}
